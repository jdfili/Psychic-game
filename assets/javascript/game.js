var wins = 0;
var losses = 0;
var guessesLeft = 9;
var options = ["a","b"]
var lettersGuessed = []


document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert("wins: " + wins)
    }
   
    if (userGuess != computerGuess) {
        guessesLeft--;
        lettersGuessed.push(userGuess);
    }


    var html = "<h1> The Psychic Game" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Letters guessed: " + lettersGuessed.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;
  


}


