$(document).ready(function() {

  var modal = document.getElementById("targetModal");
  var exit = document.getElementsByClassName("close")[0];
  var quizBtn = document.getElementById("quizBtn");

  quizBtn.onclick = function() {
    modal.style.display = "inline-block";
  }

  exit.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  $("form#questions").submit(function(event) {
      var questionOneA = $("input#questionOneA");
      var questionOneB = $("input#questionOneB");
      var questionOneC = $("input#questionOneC");
      var questionTwoA = $("input#questionTwoA");
      var questionTwoB = $("input#questionTwoB");
      var questionTwoC = $("input#questionTwoC");
      var questionThreeA = $("input#questionThreeA");
      var questionThreeB = $("input#questionThreeB");
      var questionThreeC = $("input#questionThreeC");
      var questionFourA = $("input#questionFourA");
      var questionFourB = $("input#questionFourB");
      var questionFourC = $("input#questionFourC");
      var questionFiveA = $("input#questionFiveA");
      var questionFiveB = $("input#questionFiveB");
      var questionFiveC = $("input#questionFiveC");




    event.preventDefault();
  });
});
