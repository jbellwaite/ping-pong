//Back-End, Business Logic Section
var emptyArray = [""]

function pingPonger(input) {
  var inputNumber = parseInt(input)
  for (var i = inputNumber; i > 0; i = i-1) {
    if (i%3 === 0) {
      emptyArray.push("ping")
    }else {
    emptyArray.push(i);
    }
  }
}




//Front-End, User Interface Section
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var variableSpot = pingPonger(input);
    var output = $("#output").text(emptyArray.reverse())
  })
})
