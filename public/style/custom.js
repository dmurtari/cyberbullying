$( document ).ready(function() {
  var next_button = $("#next-button")

  console.log(next_button[0].dataset.id)

  next_button.on("click", function(event) {
    var selectedVal = ""
    var selected = $("#question1 input[type='radio']:checked");
    if (selected.length > 0) {
      selectedVal = selected.val()
    }
    console.log($('input[name=question1]:checked').val())
  })
})