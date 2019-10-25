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
    event.preventDefault();
      var questionOne = parseInt($("input:radio[name=questionOne]:checked").val());
      console.log(questionOne);
      var questionTwo = parseInt($("input:radio[name=questionTwo]:checked").val());
      var questionThree = parseInt($("input:radio[name=questionThree]:checked").val());
      var questionFour = parseInt($("input:radio[name=questionFour]:checked").val());
      var questionFive = parseInt($("input:radio[name=questionFive]:checked").val());

      var totalQuiz = questionOne + questionTwo + questionThree + questionFour + questionFive;
      console.log(totalQuiz);

          if (totalQuiz <= 6) {
            $(".swift").show();
          } else if (totalQuiz <= 11) {
            $(".javaScript").show();
          } else if (totalQuiz <= 15) {
            $(".ruby").show();
          }








  });
});
