$( document ).ready(function() {
  var next_button = $("#next-button")

  console.log(next_button[0].dataset.id)

  next_button.on("click", function(event) {
    var question1 = $('input[name=question1]:checked').val()
    var question2 = $('input[name=question2]:checked').val()

    console.log(question1)
    console.log(question2)

    window.location = "/survey/list/" + question1 + "&" + question2 + "&" + next_button[0].dataset.id
  })
})