// Initialize wins, round counters and player variables
let playerWins = 0;
let computerWins = 0;
let playerSelection = "";
let roundCount = 0;

// Select Nodes
const body = document.querySelector("body");
const computerChoice = document.createElement("h3");
// Create Nodes
const winLose = document.createElement("h2");
const scores = document.createElement("div");

// Select buttons
const buttons = document.querySelectorAll(".cbtn");
buttons.forEach((button) => {
    // add click listener
    button.addEventListener("click", () => {
        // get id of clicked buttons
        playerSelection = button.id;
        let computerSelection = getComputerChoice();
        computerChoice.innerText = `Computer's Choice: ${computerSelection}`;
        body.insertBefore(computerChoice, scores);
        playRound(computerSelection, playerSelection);
        if (computerSelection == "scissors") {
            computerChoice.style.color = "rgb(64,220,255)";
        } else if (computerSelection == "rock") {
            computerChoice.style.color = "rgb(255,133,255)";
        } else {
            computerChoice.style.color = "RGB(252,237,25)";
        }
    });
});

// initiate score div text
scores.innerText = "You: 0, Computer: 0";
body.appendChild(scores);
scores.classList.add("scores");

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
    scores.innerText = `Round : ${roundCount} || You : ${playerWins} ,Computer :${computerWins}`;
    if (roundCount == 5) {
        // Checking for the winner by comparing points earned and returning the result
        // Creating winner header based on results
        if (playerWins > computerWins) {
            winLose.innerText = "Results: You Win!, Computer Lose";
        } else if (playerWins < computerWins) {
            winLose.innerText = "Results: Computer Win!, You Lose";
        } else {
            winLose.innerText = "Results: Tie!";
        }
        body.appendChild(winLose);
        winLose.classList.add("win-lose");
        playerWins = 0;
        computerWins = 0;
        roundCount = 0;
    }
}
