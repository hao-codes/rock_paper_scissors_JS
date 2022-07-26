let options = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return options[Math.floor(Math.random() * options.length)];

}

function getMyChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection);
    while (options.includes(playerSelection) == false) {
        let playerSelection = prompt("Invalid input, choose Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        if (options.includes(playerSelection) == true) {
            break
        }
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {


    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == computerSelection) {
        return "Tie!"
    } else {
        return "You win! " + playerSelection + " beats " + computerSelection;

    }
}


//const computerSelection = getComputerChoice();
//console.log(computerSelection)
//console.log(playRound(playerSelection, computerSelection));

function game() {
    console.log("Let's play 5 rounds of Rock, Paper, Scissors :D")
    let myWins = 0;
    let pcWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getMyChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result[4] == "w") {
            myWins += 1;
        } else {
            pcWins += 1;
        }
        console.log(result);
    }
    console.log("Results You: " + myWins.toString());
    console.log("Results  PC: " + pcWins.toString());
    if (myWins == pcWins) {
        console.log("Game is tied");
    } else if (myWins > pcWins) {
        console.log("Congrats, you won the total game.");
    } else {
        console.log("You lost the total game, better luck next time");

    }

}