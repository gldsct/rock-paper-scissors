function getComputerChoice(){
    let choice = (Math.floor(Math.random() * 3));
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Pick rock, paper or scissors.");
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    }
    else {
        alert("Your only options are ROCK, PAPER or SCISSORS. Try again!")
        return getHumanChoice();
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`You picked ${humanChoice} and the computer also picked ${computerChoice}. It was a tie!`);
    }
    else {
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You lost!`);
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You won!`);
                    humanScore += 1;
                    break;
            }
        }
        else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You won!`);
                    humanScore += 1;
                    break;
                case "scissors":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You lost!`);
                    computerScore += 1;
                    break;
            }
        }
        else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You lost!`);
                    computerScore += 1;
                    break;
                case "paper":
                    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You won!`);
                    humanScore += 1;
                    break;
            }
        }
    }
}

function playGame() {
    if (roundsPlayed < 5) {
        roundsPlayed += 1;
        console.log(`Round ${roundsPlayed}!`);
        playRound();
        playGame();
    }
    else {
        console.log(`5 rounds completed. Game over.\nFinal Score\nHuman: ${humanScore} / Computer: ${computerScore}`);
        if (humanScore === computerScore) {
            console.log("No one won. It was a tie!");
        }
        else {
            if (humanScore > computerScore) {
                console.log("You won! Congratulations!");
            }
            else {
                console.log("The computer won. Better luck next time!");
            }
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

playGame();