var winCount = 1;
var lossesCount =  0;
var guessesRemaining = 9;
var failedAttempts = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];


// computer pick
var randomPick = Math.floor(Math.random() * letters.length);
var computerPick = letters[randomPick];

console.log(computerPick);


document.onkeyup = function(event) {
    var userPick = event.key;

    var regex = /[a-z]/gi;
        if (!regex.test(userPick)) {
            alert("Please Choose a Letter")
        }
        else {
            console.log(userPick);
        }
}

if (guessesRemaining <= 0) {
    lossesCount++;
    document.getElementById("lossesCount").innerHTML = lossesCount++;
    console.log("What a loser!")
    alert("Sucks for You");
    guessesRemaining = 9;
    failedAttempts = [];
    document.getElementById("failedAttempts").innerHTML = failedAttempts;
    document.getElementById("guessesRemaining").innerHTML = 9;
    randomPick = Math.floor(Math.random() * letters.length);
    computerPick = letters[randomPick];
    console.log(computerPick);
}

