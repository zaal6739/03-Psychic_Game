
// tracking variables for game
var totGuesses = 9;
var wins = 0;
var losses=0;
var playerGuesses=[];
var compAvailGuesses=[];

//array to choose letters from
var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s", "t", "u", "v", "w", "x", "y", "z"];



//first computer guess and console log
window.onload = function() {
	var compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];
	compAvailGuesses.push(compGuess);
	console.log(compAvailGuesses[0]);
}


//type and show letters guessed
document.onkeyup = function(event) {
	var playerGuess = event.key;
	playerGuesses.push(playerGuess);
	console.log(compAvailGuesses[0]);


//logic allowing for resetting after 9 tries
if ((playerGuess === compAvailGuesses[0]) && (totGuesses > 0))
    {
    wins++;
	totGuesses = 9;
	playerGuesses.length = 0;
	compAvailGuesses.length = 0;
	var compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];
	compAvailGuesses.push(compGuess);
	console.log(compAvailGuesses[0]);
}

else if ((playerGuess !== compAvailGuesses[0]) && (totGuesses > 0)) {
	totGuesses = totGuesses-1;
}

else {
	losses++;
	totGuesses = 9;
	playerGuesses.length = 0;
	compAvailGuesses.length = 0;
	var compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];
	compAvailGuesses.push(compGuess);
	console.log(compAvailGuesses[0]);
}

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + totGuesses + "</p>" +
          "<p>Your guesses so far: " + playerGuesses + "</p>";
 
document.querySelector(".main-container").innerHTML = html;

}
