function computerPlay() {
    let randIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let result = "";

    // possible outcomes for choosing rock
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "Tie! Rock ties with rock.";
        }
        else if (computerSelection === "paper") {
            result = "You lose! Paper beats rock.";
            computerScore++;
        }
        else {
            result = "You win! Rock beats scissors.";
            playerScore++;
        }
    }
    // possible outcomes for choosing paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper beats rock.";
            playerScore++;
        }
        else if (computerSelection === "paper") {
            result = "Tie! Paper ties with paper.";
        }
        else {
            result = "You lose! Scissors beats paper.";
            computerScore++;
        }
    }
    // possible outcomes for choosing scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock beats scissors.";
            computerScore++;
        }
        else if (computerSelection === "paper") {
            result = "You win! Scissors beats paper.";
            playerScore++;
        }
        else {
            result = "Tie! Scissors ties with scissors.";
        }
    }

    // if no matches were found, then the user did not input a valid response
    if (result === "") {
        result = "Incorrect input. Valid choices are \"rock\", \"paper\", or \"scissors\"";
    }

    return result;
}
  
function game() {
    // loop until there's a winner
    while (playerScore < 5 && computerScore < 5) {
        // prompt user for input and get computer's random input
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = computerPlay();
        // play out the round, output results and display updated score
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You: ${playerScore}, Computer: ${computerScore}`);
    }
    // output game summary
    console.log(`Game over! ${(playerScore < computerScore) ? "Computer wins!" : "You win!"}`);
}

let playerScore = 0;
let computerScore = 0;

game();