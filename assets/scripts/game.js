var wins= 0
var losses=0
var guessesLeft= 10
var secretLetter= pickRandomLetter()

function pickRandomLetter(){
    var n= Math.floor( Math.random() * 26) 
    var chr = String.fromCharCode(97 + n); // where n is 0, 1, 2 ...
    return chr
}

function incrementWins(){
    wins = wins + 1
}

function incrementLosses() {
    losses = losses + 1
}

function decrementGuesses() {
    guessesLeft = guessesLeft - 1
}

function resetGame() {
    guessesLeft = 10
    secretLetter = pickRandomLetter()
}

function takeTurn(userGuess) {
    if (userGuess == secretLetter) {
        incrementWins()
        resetGame()
    } else if (guessesLeft == 1) { 
        incrementLosses()
        resetGame()
    } else {
        decrementGuesses()
    }
    
    fillValue()
}

function fillValue(){
    $(".wins").text(wins)
    $(".losses").text(losses)
    $(".guesses").text(guessesLeft)
}

$(document).keydown(function(event) {
    var keycode = event.keyCode
    var asciicode = keycode + 32
    var letter= String.fromCharCode(asciicode)
    takeTurn(letter)
})

fillValue()
