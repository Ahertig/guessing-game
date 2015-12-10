/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber()

var Player = {guesses: [],
  numGuess: 0
}

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  return Math.floor((Math.random() * 100) + 1);
}

// Fetch the Players Guess

function playersGuessSubmission(event){
  playersGuess = parseInt($("#guess").val());
  $("#guess").val("");
  checkGuess(event);
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
}

// Check if the Player's Guess is the winning number 

function checkGuess(event){
  if (Player.guesses.indexOf(playersGuess) > -1) {
    $(".feedback").remove();
    $("#guess").after("<p class='feedback'>You already submitted this number</p>");
  }
  else {
    if (Player.guesses.indexOf(playersGuess) == -1) {
      Player.numGuess++;
      Player.guesses.push(playersGuess)
    }
    if (Player.numGuess <= 5) {
    	if (playersGuess === winningNumber) {
        $(".feedback").remove();
        $("#guess").after("<p class='feedback'>You win!</p>");
      } else {
        $(".feedback").remove();
        $("#guess").after("<p class='feedback'>Try Again</p>");
        $("#guesses-left").text(5 - Player.numGuess);
      }
    }
  }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

$(document).ready(function() {
  $('#submit').on('click', function(event) {
      playersGuessSubmission(event);
      event.preventDefault();
  });
});








