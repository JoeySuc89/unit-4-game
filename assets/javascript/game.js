// Set the global variabes for the games different counters.
var scoreCounter = 0;
var winsCounter = 0;
var lossesCounter = 0;
var crystalValueGreen = Math.floor(Math.random() * 12) + 1;
var crystalValueBlue = Math.floor(Math.random() * 12) + 1;
var crystalValuePurple = Math.floor(Math.random() * 12) + 1;
var crystalValueAmber = Math.floor(Math.random() * 12) + 1;
var randomScoreCounter = Math.floor(Math.random() * (120 - 19) + 19);
$("#randomCounter").text(randomScoreCounter);
console.log(randomScoreCounter)

//Create a randomNumber loop to change the value of the crystals.
$(document).ready(function() {

  $("#greenCrystal").on("click", function() {
    scoreCounter += crystalValueGreen;
    $("#scoreCounter").text("Your score: " + scoreCounter);
    winsLossesScore();
    console.log(crystalValueGreen)
  });


  $("#blueCrystal").on("click", function() {
    scoreCounter += crystalValueBlue;
    $("#scoreCounter").text("Your score: " + scoreCounter);
    winsLossesScore();
    console.log(crystalValueBlue)
  });

  $("#purpleCrystal").on("click", function() {
    scoreCounter += crystalValuePurple;
    $("#scoreCounter").text("Your score: " + scoreCounter);
    winsLossesScore();
    console.log(crystalValuePurple)
  });

  $("#amberCrystal").on("click", function() {
    scoreCounter += crystalValueAmber;
    $("#scoreCounter").text("Your score: " + scoreCounter);
    winsLossesScore();
    console.log(crystalValueAmber)
  });



   console.log(winsLossesScore);
})

function reset() {
  randomScoreCounter = Math.floor(Math.random() * (120 - 19) + 19);
  $("#randomCounter").text(randomScoreCounter);
  crystalValueGreen = Math.floor(Math.random() * 12) + 1;;
  crystalValueBlue = Math.floor(Math.random() * 12) + 1;;
  crystalValuePurple = Math.floor(Math.random() * 12) + 1;;
  crystalValueAmber = Math.floor(Math.random() * 12) + 1;;
  scoreCounter = 0;
}
function winsLossesScore() {
  console.log(`scoreCounter ${scoreCounter} randomCounter: ${randomScoreCounter}`)
  if (scoreCounter == randomScoreCounter){
    winsCounter++;
    $("#winsCounter").html("Wins: " + winsCounter);
    reset();
    console.log(winsCounter);
  }
  if  (scoreCounter > randomScoreCounter) {
    lossesCounter++;
    $("#lossCounter").html("Losses: " + lossesCounter);
    reset();
    console.log(lossCounter);
  }
}
