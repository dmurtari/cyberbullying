var express = require('express')
var fs = require('fs')
var app = express()
var paginate = require('express-paginate');

var _ = require('lodash')

app.data = {}
app.data.survey = require('./data/cyberbullying_data.json').data
app.data.questions = require('./data/survey_questions.json').data


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

    var post = _.find(results.survey_results, {'id': id})
    console.log(id)
    console.log(results.survey_results)
    console.log(post)

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
})

// load routes for note, account, context
require('./routes/about')(app)
require('./routes/surveyList')(app)
require('./routes/surveyQuestion')(app)

app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})
