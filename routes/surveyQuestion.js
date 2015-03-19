module.exports = function(app) {

  var _ = require('lodash')

  app.get('/survey/list/:id', function(req, res){
    var post = _.find(app.data.survey, {'id': Number(req.params.id)})
    var length = app.data.survey.length
    var questions = app.data.questions

    res.render('surveyQuestion.jade', {
      post: post,
      survey_length: length,
      questions: questions
    })
  })
}
