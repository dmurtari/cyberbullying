module.exports = function(app) {

  var _ = require('lodash')

  app.get('/survey/list/:id', function(req, res){
    var post = _.find(app.data.survey, {'id': Number(req.params.id)})
    var length = app.data.survey.length

    res.render('surveyQuestion.jade', {
      post: post,
      survey_length: length
    })
  })
}
