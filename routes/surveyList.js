module.exports = function(app) {
  app.get('/survey/list', function(req, res) {

    var survey = app.data.survey

    res.render('surveyList.jade', {
      survey: survey
    })
  })
}