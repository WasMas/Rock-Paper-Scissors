let playerSelection = "";
const buttons = document.querySelectorAll(".cbtn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        playRound(getComputerChoice(), playerSelection);
    });
});

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
function playRound(computerSelection, playerSelection) {
    // Converting selections to lowercase for comparison
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection, playerSelection);
    // Comparing Players Choices
    if (playerSelection == computerSelection) {
        return game("Tie!");
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return game("You Lose! Paper beats Rock");
        } else {
            return game("You Win! Rock beats Scissors");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return game("You Win! Paper beats Rock");
        } else {
            return game("You Lose! Scissors beats Paper");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return game("You Lose! Rock beats Scissors");
        } else {
            return game("You Win! Scissors beats Paper");
        }
    }
}

function game(results) {
    // Initialize wins counter variables
    let playerWins = 0;
    let computerWins = 0;
    console.log(results);
    // Playing 5 rounds
    for (let i = 0; i < 5; i++) {
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
