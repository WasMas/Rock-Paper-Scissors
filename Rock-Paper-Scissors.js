// Initialize wins counter variables
let playerWins = 0;
let computerWins = 0;
let playerSelection = "";
let roundCount = 0;
// Create element to declare who won/lost
const winLose = document.createElement("h2");
// Select buttons
const buttons = document.querySelectorAll(".cbtn");
buttons.forEach((button) => {
    // add click listener
    button.addEventListener("click", () => {
        // get id of clicked buttons
        playerSelection = button.id;
        playRound(getComputerChoice(), playerSelection);
    });
});
// Select body
const body = document.querySelector("body");
// Create a div for scores
const scores = document.createElement("div");
// initiate score div text
scores.innerText = "You: 0, Computer: 0";
body.appendChild(scores);

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
    if (document.querySelector("h2") != null) {
        body.removeChild(winLose);
    }
    // Converting selections to lowercase for comparison
    playerSelection = playerSelection.toLowerCase();
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
    // Giving a point to the Winner or both if Tie
    if (results.includes("Win")) {
        playerWins++;
        roundCount++;
    } else if (results.includes("Lose")) {
        computerWins++;
        roundCount++;
    } else {
        computerWins++;
        playerWins++;
        roundCount++;
    }
    // Update scores
    scores.innerText = `Round : ${roundCount}\n You : ${playerWins} ,Computer :${computerWins}`;
    if (roundCount == 5) {
        // Checking for the winner by comparing points earned and returning the result
        // Creating winner header based on results
        if (playerWins > computerWins) {
            winLose.innerText = "You Win!, Computer Lose";
        } else if (playerWins < computerWins) {
            winLose.innerText = "Computer Win!, You Lose";
        } else {
            winLose.innerText = "Tie!";
        }
        body.appendChild(winLose);
        playerWins = 0;
        computerWins = 0;
        roundCount = 0;
    }
}
