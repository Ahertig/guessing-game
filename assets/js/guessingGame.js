/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber()

var guesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  return Math.floor((Math.random() * 100) + 1);
}

// Fetch the Players Guess

function playersGuessSubmission(event){
  playersGuess = parseInt($("#guess").val());
  $("#guess").val("");
  debugger;

  // playersGuess = parseInt(document.getElementById("guess").value);
  // alert(playersGuess);

  // $('#guess').on('click', function() {
  //     console.log($(this).val());
  //     debugger;
  // });
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
    return 'You win the game!';
  } else {
    $("#guess").append("<p>Try Again</p>");
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
      checkGuess();
  });
});








