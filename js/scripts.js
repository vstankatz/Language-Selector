$(document).ready(function() {


  var modal = document.getElementById("targetModal");
  var exit = document.getElementsByClassName("close")[0];
  var quizBtn = document.getElementById("quizBtn");
  var backJava = document.getElementById("backJava");
  var backSwift = document.getElementById("backSwift");
  var backRuby = document.getElementById("backRuby");


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


  backJava.onclick = function() {
    $(".java").hide();
    $(".intro").show();
  }

  backSwift.onclick = function() {
    $(".swift").hide();
    $(".intro").show();
  }

  backRuby.onclick = function() {
    $(".ruby").hide();
    $(".intro").show();
  }


  $("form#questions").submit(function(event) {
    event.preventDefault();


      var questionOne = parseInt($("input:radio[name=questionOne]:checked").val());
      console.log(questionOne);
      var questionTwo = parseInt($("input:radio[name=questionTwo]:checked").val());
      var questionThree = parseInt($("input:radio[name=questionThree]:checked").val());
      var questionFour = parseInt($("input:radio[name=questionFour]:checked").val());
      var questionFive = parseInt($("input:radio[name=questionFive]:checked").val());
      var nameInput = $("input#nameInput").val();
      var totalQuiz = questionOne + questionTwo + questionThree + questionFour + questionFive;
      console.log(totalQuiz);
      console.log(nameInput);

          if (totalQuiz <= 6) {
            $(".modal").hide();
            $(".intro").hide();
            $(".swift").show();
            $(".name").text(" " + nameInput);
          } else if (totalQuiz <= 11) {
            $(".modal").hide();
            $(".intro").hide();
            $(".java").show();
            $(".name").text(" " + nameInput);
          } else if (totalQuiz <= 15) {
            $(".modal").hide();
            $(".intro").hide();
            $(".ruby").show();
            $(".name").text(" " + nameInput);
          } else {
            alert("Please be sure to pick an option for each question.")
          }

  });

});
