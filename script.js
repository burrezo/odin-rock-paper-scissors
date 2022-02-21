let userTotal = 0;
let computerTotal = 0;
let round = 1;

function computerPlay() {
    let randNum = Math.random();
    if (randNum < 0.333) return "Rock";
    else if (randNum < 0.666) return "Paper";
    else return "Scissors";
}

function userPlay() {

    let playerSelectionLowerCase;
    
    do {

    let playerSelection = prompt(`Round ${round}/5\n\nUser: ${userTotal} Computer: ${computerTotal}\n\nChoose rock, paper or scissors:`);

    playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase != "rock" && playerSelectionLowerCase != "paper" && playerSelectionLowerCase != "scissors") alert("Don't understand, repeat please.");

    } while (playerSelectionLowerCase != "rock" && playerSelectionLowerCase != "paper" && playerSelectionLowerCase != "scissors");

    let playerSelectionCapitalized = playerSelectionLowerCase.charAt(0).toUpperCase() + playerSelectionLowerCase.slice(1);

    return playerSelectionCapitalized;
}

function playRound(user, computer) {

    let computerRock = "Computer choose Rock, ";
    let computerPaper = "Computer choose Paper, ";
    let computerScissors = "Computer choose Schissors, ";

    let paperRock = "Paper wins Rock";
    let rockScissors = "Rock wins Scissors";
    let scissorsPaper = "Scissors wins Paper";
    let rockRock = "Tie!";
    let paperPaper = "Tie!";
    let scissorsScissors = "Tie!";

    let youLose = " , you lose!";
    let youWin = " , you win!";

    if (user == "Rock") {
        if (computer == "Paper") { 
            alert(computerPaper + paperRock + youLose);
            computerTotal++;
        }
        else if (computer == "Scissors") {
            alert(computerScissors + rockScissors + youWin);
            userTotal++;
        } 
        else {
            alert(computerRock + rockRock);
        }
    }
    else if (user == "Paper") {
        if (computer == "Rock") { 
            alert(computerRock + paperRock + youWin);
            userTotal++;
        }
        else if (computer == "Scissors") {
            alert(computerScissors + scissorsPaper + youLose);
            computerTotal++;
        } 
        else {
            alert(computerPaper + paperPaper);
        }
    }
    else if (user == "Scissors") {
        if (computer == "Paper") { 
            alert(computerPaper + scissorsPaper + youWin);
            userTotal++;
        }
        else if (computer == "Rock") {
            alert(computerRock + rockScissors + youLose);
            computerTotal++;
        } 
        else {
            alert(computerScissors + scissorsScissors);
        }
    }
}

for (round = 1; round < 6; round++) {
    playRound(userPlay(), computerPlay());
}

let finalAlert;
if (userTotal > computerTotal) finalAlert = "You WIN!!!";
else if (userTotal < computerTotal) finalAlert = "You LOSE!!!";
else finalAlert = "TIE!"
alert(`Final score:\n\nUser: ${userTotal} Computer: ${computerTotal}\n\n${finalAlert}`)
