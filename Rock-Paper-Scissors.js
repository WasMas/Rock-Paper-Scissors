function getComputerChoice() {
    // Getting a random number between 1 and 3
    let random_number = Math.floor(Math.random() * 3 + 1);
    switch (random_number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
// Playing a round to see results
function playRound(playerSelection, computerSelection) {
    // Converting selections to lowercase for comparison
    playerSelection = playerSelection.toLowerCase();
    // Comparing Players Choices
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    // Initialize wins counter variables
    let playerWins = 0;
    let computerWins = 0;
    // Playing 5 rounds
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors!");
        results = playRound(playerSelection, getComputerChoice());
        // Giving a point to the Winner or both if Tie
        if (results.includes("Win")) {
            playerWins++;
        } else if (results.includes("Lose")) {
            computerWins++;
        } else {
            computerWins++;
            playerWins++;
        }
    }
    // Checking for the winner by comparing points earned and returning the result
    if (playerWins > computerWins) {
        return "You Win!, Computer Lose";
    } else if (playerWins < computerWins) {
        return "Computer Win!, You Lose";
    } else {
        return "Tie!";
    }
}
