// possible options for rps
let options = ["rock", "paper", "scissors"];

// function to get choice of computer
function getComputerChoice() {

    return options[Math.floor(Math.random() * options.length)];

}

// function getMyChoice() {
//     let playerSelection = prompt("Rock, Paper or Scissors?");
//     playerSelection = playerSelection.toLowerCase()
//     console.log(playerSelection);
//     while (options.includes(playerSelection) == false) {
//         let playerSelection = prompt("Invalid input, choose Rock, Paper or Scissors?");
//         playerSelection = playerSelection.toLowerCase();
//         if (options.includes(playerSelection) == true) {
//             break
//         }
//     }
//     return playerSelection;
// }

//game logic for one round, returns 
function playRound(playerSelection, computerSelection) {
    //let computerSelection = getComputerChoice()

    //console.log(playerSelection, computerSelection);
    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        return "You lose!";
    } else if (playerSelection == computerSelection) {
        return "Tie!"
    } else {
        return "You win! Keep Going!";

    }
}
//playerSelection = getMyChoice();



// function clickHandler(event) {
//     console.log('Button Clicked');
// }

// set scores at start of game

const score = document.getElementById("score")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")

let intPlayerScore = 0;
let intComputerScore = 0;

playerScore.innerHTML = intPlayerScore;
computerScore.innerHTML = intComputerScore;
// playerScore.innerText = "0";
// computerScore.innerText = "0";

const rock = document.querySelector("#rock");
rock.addEventListener("click", function(e) {
    //console.log(e.srcElement.id);

    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;
    console.log(result);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(e) {
    //console.log(e.srcElement.id);

    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;
    console.log(result);
});

let roundCounter = 0;
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(e) {
    //console.log(e.srcElement.id);
    if (roundCounter == 0) {
        document.getElementById("gameEnd").innerText = "";
        intPlayerScore = 0;
        intComputerScore = 0;
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }
    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;

    if (result[4] == "w") {
        //intPlayerScore += 1;
        playerScore.innerHTML = (intPlayerScore += 1);
    } else {
        //intComputerScore += 1;
        computerScore.innerHTML = (intComputerScore += 1);
    }

    roundCounter += 1;
    console.log("-----", roundCounter);
    console.log(intPlayerScore, intComputerScore);
    console.log(result);
    if (roundCounter >= 5) {
        document.getElementById("gameEnd").innerText = "Game Ended";
        roundCounter = 0;
        console.log("newgame", roundCounter);
    };
});

//const gameEnd = document.querySelector("#gameEnd");


function game() {
    // console.log("Let's play 5 rounds of Rock, Paper, Scissors :D")
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