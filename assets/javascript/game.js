var wins = 0;
var losses = 0;
var guessesLeft = 9;
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var computerGuess = options[Math.floor(Math.random() * options.length)];

document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    // var computerGuess = options[Math.floor(Math.random() * options.length)];

    if (userGuess == computerGuess) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
        computerGuess = options[Math.floor(Math.random() * options.length)];
        
    }

    if (userGuess != computerGuess) {
        guessesLeft--;
        lettersGuessed.push(userGuess);
    }

    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        lettersGuessed = []
        computerGuess = options[Math.floor(Math.random() * options.length)];
        
    }


    var html = "<div class='header'> <h1> The Psychic Game </h1> </div>" +
        "<div class='container'> <p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Letters guessed: " + lettersGuessed.join(", ") + "</p> </div>";

    document.querySelector("#game").innerHTML = html;
}
