$(document).ready(function() {

  var modal = document.getElementById("targetModal");
  var exit = document.getElementsByClassName("close")[0];
  var quizBtn = document.getElementById("quizBtn");

  quizBtn.onclick = function() {
    modal.style.display = "block";
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
  });
});
