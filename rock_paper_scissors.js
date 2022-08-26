// possible options for rps
let options = ["rock", "paper", "scissors"];

// function to get random choice of computer
function getComputerChoice() {

    return options[Math.floor(Math.random() * options.length)];

}



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
    if (roundCounter == 0) {
        document.getElementById("endGame").innerText = "";

        intPlayerScore = 0;
        intComputerScore = 0;
        playerScore.textContent = intPlayerScore;
        computerScore.textContent = intComputerScore;
    }
    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;
    console.log(result);
    if (result[4] == "w") {
        intPlayerScore += 1;
        playerScore.innerHTML = (intPlayerScore);
    } else {
        intComputerScore += 1;
        computerScore.innerHTML = (intComputerScore);
    }
    // console logs
    roundCounter += 1;

    console.log(intPlayerScore, intComputerScore,result);
    
    //check if player/computer has won 5 rounds
    if (intComputerScore >= 5 || intPlayerScore >= 5) {
        playerScore.innerHTML = (intPlayerScore);
        computerScore.innerHTML = (intComputerScore);
        newGameButton();
        //scissors.disabled = true;
        console.log("new game", roundCounter);
        //newGameButton();

}});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(e) {
    //console.log(e.srcElement.id);
    if (roundCounter == 0) {
        document.getElementById("endGame").innerText = "";

        intPlayerScore = 0;
        intComputerScore = 0;
        playerScore.textContent = intPlayerScore;
        computerScore.textContent = intComputerScore;
    }
    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;
    //console.log(result);
    if (result[4] == "w") {
        intPlayerScore += 1;
        playerScore.innerHTML = (intPlayerScore);
    } else {
        intComputerScore += 1;
        computerScore.innerHTML = (intComputerScore);
    }
    // console logs
    roundCounter += 1;

    console.log(intPlayerScore, result);
    
    //check if player/computer has won 5 rounds
    if (intComputerScore >= 5 || intPlayerScore >= 5) {
        playerScore.innerHTML = (intPlayerScore);
        computerScore.innerHTML = (intComputerScore);
        newGameButton();
        //scissors.disabled = true;
        console.log("new game", roundCounter);
        //newGameButton();

}});

let roundCounter = 0;
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(e) {
    //console.log(e.srcElement.id);

    if (roundCounter == 0) {
        document.getElementById("endGame").innerText = "";

        intPlayerScore = 0;
        intComputerScore = 0;
        playerScore.textContent = intPlayerScore;
        computerScore.textContent = intComputerScore;
    }
    let result = playRound(e.srcElement.id, getComputerChoice());
    document.getElementById("roundResult").innerText = result;

    if (result[4] == "w") {
        intPlayerScore += 1;
        playerScore.innerHTML = (intPlayerScore);
    } else {
        intComputerScore += 1;
        computerScore.innerHTML = (intComputerScore);
    }
    // console logs
    roundCounter += 1;

    console.log(intPlayerScore, intComputerScore, result);

    //check if player/computer has won 5 rounds
    if (intComputerScore >= 5 || intPlayerScore >= 5) {
        playerScore.innerHTML = (intPlayerScore);
        computerScore.innerHTML = (intComputerScore);
        newGameButton();
        //scissors.disabled = true;
        console.log("new game", roundCounter);
        //newGameButton();

    };
});

//const gameEnd = document.querySelector("#gameEnd");
function newGameButton() {
    // document.getElementById("endGame").innerHTML = "<button>Game Ended</button>";
    endGame.innerHTML = "<button>Play again</button>";
    roundCounter = 0;
    scissors.disabled = false;
}

const endGame = document.querySelector("#endGame");
endGame.addEventListener("click", function(e) {
    console.log(e);
    roundCounter = 0;
    document.getElementById("roundResult").textContent = "";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    endGame.innerHTML = "";
})