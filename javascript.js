function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
            roundResult.textContent += `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.\n`;
        }
        else {
            if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
                roundResult.textContent += `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}. You win this round!\n`;
                playerScore += 1;
            }
            else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
                roundResult.textContent += `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} gets beaten by ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}. You lose this round!\n`;
                computerScore += 1;
            }   
        }
        gameResults (playerScore, computerScore);
    }
}

function gameResults (playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) gameResult.textContent = `Congratulations! You won the game!!!`;
        else gameResult.textContent = `Sorry! You lost the game!!!`;
        resetGame ();
        }
}

function resetGame () {
    result.appendChild(newGameButton);
}

let playerScore = 0;
let computerScore = 0;

const allChoices = document.querySelectorAll("button");

allChoices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        playRound(choice.id, getComputerChoice());
    });
});

// 

const result = document.querySelector("#result");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");

const newGameButton = document.createElement("button");
newGameButton.textContent = "Start new game?"
newGameButton.style.cssText = "height: 30px; width: 200px; font-size: 22px;"

newGameButton.addEventListener("click", (event) => {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    gameResult.textContent = "";
    result.removeChild(newGameButton);
});