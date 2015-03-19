var express = require('express')
var fs = require('fs')
var app = express()

var _ = require('lodash')

app.data = {}
app.data.survey = require('./data/cyberbullying_data.json').data
app.data.results = require('./data/survey_results.json')

// use jade as the view engine
app.set('view engine', 'jade')

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'))

// default to index
app.get('/', function(req, res) {
    res.render('index.jade')
})

app.get('/survey/list/:id/:q1?&:q2', function(req, res) {
    console.log(app.data.results)
    console.log(req.params.q1)
    console.log(req.params.q2)
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
