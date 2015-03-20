$( document ).ready(function() {
  var next_button = $("#next-button")
  var prev_button = $("#prev-button")
  var submit_button = $("#submit-button")

  next_button.on("click", function(event) {
    var question1 = $('input[name=question1]:checked').val()
    var question2 = $('input[name=question2]:checked').val()

    console.log(question1)
    console.log(question2)

    window.location = "/survey/list/" + next_button[0].dataset.id + "/" + question1 + "&" + question2 + "&next" 
  })

  prev_button.on("click", function(event) {
    var question1 = $('input[name=question1]:checked').val()
    var question2 = $('input[name=question2]:checked').val()

    console.log(question1)
    console.log(question2)

    window.location = "/survey/list/" + prev_button[0].dataset.id + "/" + question1 + "&" + question2 + "&prev" 
  })

  submit_button.on("click", function(event) {
    var question1 = $('input[name=question1]:checked').val()
    var question2 = $('input[name=question2]:checked').val()

    console.log(question1)
    console.log(question2)

    window.location = "/survey/list/" + submit_button[0].dataset.id + "/" + question1 + "&" + question2 + "&submit" 
  })
})