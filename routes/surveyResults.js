module.exports = function(app) {
  app.get('/survey/results', function(req, res) {

    var results = app.data.results
    var survey = app.data.survey
    var images = {}

    for (var i = 0; i < survey.length; i++) {
      images[survey[i].id] = survey[i].image_url
    };

    res.render('surveyResults.jade', {
      results: results,
      images: images
    })
  })
}