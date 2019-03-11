// Set the global variabes for the games different counters.
var scoreCounter = "";
var winsCounter = 0;
var lossesCounter = 0;
var randomScoreCounter = "";

//Create a randomNumber loop to change the value of the crystals.
$(document).ready(function() {
$("#randomCounter").text(randomScoreCounter);
$("#scoreCounter").text(scoreCounter);
var numberOptions = Math.floor(Math.random() * 12) + 1;


    $(".crystal-images").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    scoreCounter += crystalValue;
    $(".crystal-images").attr("data-crystalValue", numberOptions);

    console.log(crystalValue);
  })
})
