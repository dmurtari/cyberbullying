var express = require('express')
var fs = require('fs')
var app = express()
var paginate = require('express-paginate');

var _ = require('lodash')

app.data = {}
app.data.survey = require('./data/cyberbullying_data.json').data
app.data.questions = require('./data/survey_questions.json').data
app.data.results = require('./data/survey_results.json').survey_results


// use jade as the view engine
app.set('view engine', 'jade')

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'))

// set pagination
app.use(paginate.middleware(10, 50));

// default to index
app.get('/', function(req, res) {
    res.render('index.jade')
})

app.get('/survey/list/:id/:q1?&:q2?&:button', function(req, res) {
    var results = require('./data/survey_results.json')
    var q1 = req.params.q1
    var q2 = req.params.q2
    var id = req.params.id
    var op = req.params.button
    var length = app.data.survey.length

    if (!(q1 == "undefined" || q2 == "undefined")) {
        var post = _.find(results.survey_results, {'id': id})

        if (post) {
            result_data = {
                '1' : q1,
                '2' : q2
            }
            post['results'].push(result_data)

        } else {
            var result_data = {}
            result_data['id'] = id
            result_data['results'] = [{
                '1' : q1,
                '2' : q2
            }]

            results.survey_results.push(result_data)
        }

        fs.writeFileSync('./data/survey_results.json', JSON.stringify(results, null, 4));
    }

    var id_num = Number(id)
    if (op == "next") {
        res.redirect('/survey/list/' + (id_num + 1))
    } else if (op == "submit") {
        res.redirect('/survey/list/' + id_num)
    } else if (op == "prev") {
        res.redirect('/survey/list/' + (id_num - 1))
    }


})

// load routes for note, account, context
require('./routes/about')(app)
require('./routes/surveyList')(app)
require('./routes/surveyQuestion')(app)
require('./routes/surveyResults')(app)

app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})
