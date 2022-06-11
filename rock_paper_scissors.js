// randomly chooses an option for the computer's play
function computerPlay() {
    let randIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randIndex];
}

// carries out the play of a round; ends the game if needed
function playRound(playerSelection, computerSelection) {
    let results = getWinner(playerSelection, computerSelection);

    updateBoard(results);
    if (playerScore === 5 || computerScore === 5) {
        gameOver();
    }

    return results;
}

// determines the winner of a round and returns the proper round summary/winner
function getWinner() {
    let result;
    let winner;
    // possible outcomes for choosing rock
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "Tie! Rock ties with rock.";
            winner = "tie";
        }
        else if (computerSelection === "paper") {
            result = "You lose! Paper beats rock.";
            computerScore++;
            winner = "computer";
        }
        else {
            result = "You win! Rock beats scissors.";
            playerScore++;
            winner = "player";
        }
    }
    // possible outcomes for choosing paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper beats rock.";
            playerScore++;
            winner = "player";
        }
        else if (computerSelection === "paper") {
            result = "Tie! Paper ties with paper.";
            winner = "tie";
        }
        else {
            result = "You lose! Scissors beats paper.";
            computerScore++;
            winner = "computer";
        }
    }
    // possible outcomes for choosing scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock beats scissors.";
            computerScore++;
            winner = "computer";
        }
        else if (computerSelection === "paper") {
            result = "You win! Scissors beats paper.";
            playerScore++;
            winner = "player";
        }
        else {
            result = "Tie! Scissors ties with scissors.";
            winner = "tie";
        }
    }

    return [result, winner];
}

// updates the score board and displays the correct images/messages
function updateBoard(results) {
    // changes the image/background for the player's selection
    playerDisplay.src = `./images/${playerSelection}.png`;
    switch (true) {
        case (playerSelection === "rock"):
            playerDisplay.style.backgroundColor = "#ff652f";
            break;
        case (playerSelection === "paper"):
            playerDisplay.style.backgroundColor = "#4aa3af";
            break;
        case (playerSelection === "scissors"):
            playerDisplay.style.backgroundColor = "#ffe400";
            break;
    }
    // changes the image/background for the player's selection
    computerDisplay.src = `./images/${computerSelection}.png`;
    switch (true) {
        case (computerSelection === "rock"):
            computerDisplay.style.backgroundColor = "#ff652f";
            break;
        case (computerSelection === "paper"):
            computerDisplay.style.backgroundColor = "#4aa3af";
            break;
        case (computerSelection === "scissors"):
            computerDisplay.style.backgroundColor = "#ffe400";
            break;
    }
    // changes score/text colors for the player winning the round
    if (results[1] === "player") {
        playerUpdateScore.textContent = `${playerScore}`;
        playerUpdateScore.style.color = "#02d914";

        computerUpdateScore.textContent = `${computerScore}`;
        computerUpdateScore.style.color = "black";

        roundUpdate.textContent = results[0];
        roundUpdate.style.color = "#02d914";
    } 
    // changes score/text colors for the computer winning the round
    else if (results[1] === "computer") {
        playerUpdateScore.textContent = `${playerScore}`;
        playerUpdateScore.style.color = "black";

        computerUpdateScore.textContent = `${computerScore}`;
        computerUpdateScore.style.color = "#880000";

        roundUpdate.textContent = results[0];
        roundUpdate.style.color = "#880000";
    } 
    // changes score/text colors for a tie
    else {
        playerUpdateScore.textContent = `${playerScore}`;
        playerUpdateScore.style.color = "black";

        computerUpdateScore.textContent = `${computerScore}`;
        computerUpdateScore.style.color = "black";

        roundUpdate.textContent = results[0];
        roundUpdate.style.color = "black";
    }
}

// when the game is over, toggle to results screen and prompt for play again
function gameOver() {
    // changes screens
    active.classList.add("hide");
    results.classList.remove("hide");

    // displays proper game summary
    summary.textContent = `${(playerScore < computerScore) ? `The computer beat you ${computerScore} - ${playerScore}!` : `You beat the computer ${playerScore} - ${computerScore}!`}`;
    summary.style.color = `${(playerScore < computerScore) ? "red" : "green"}`;
}

// resets the game in order to begin playing again
function playAgain() {
    playerScore = 0;
    computerScore = 0;

    // change to question mark display
    playerDisplay.src = "./images/question-mark.png";
    playerDisplay.style.backgroundColor = "#747474";

    computerDisplay.src = "./images/question-mark.png";
    computerDisplay.style.backgroundColor = "#747474";

    // reset to black text and proper initial message
    playerUpdateScore.textContent = "0";
    playerUpdateScore.style.color = "black";

    computerUpdateScore.textContent = "0";
    computerUpdateScore.style.color = "black";

    roundUpdate.textContent = "Make your pick!";
    roundUpdate.style.color = "black";

    // changes to correct screen
    results.classList.add("hide");
    active.classList.remove("hide");
}

// starts the round upon button click
function handleClick() {
    playerSelection = this.className;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

// game variables
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// play button nodes
const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");

// image display nodes
const playerDisplay = document.querySelector(".player-play > img");
const computerDisplay = document.querySelector(".computer-play > img");

// score/round update nodes
const playerUpdateScore = document.querySelector("#player");
const computerUpdateScore = document.querySelector("#computer");
const roundUpdate = document.querySelector(".round-update");

// nodes to toggle between playing and results screens
const active = document.querySelector(".active");
const results = document.querySelector(".results");

// nodes for results screen
const summary = document.querySelector(".game-summary");
const resultsContainer = document.querySelector(".results > .container");
const restart = document.querySelector(".container > button");

// event listeners
rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);

restart.addEventListener("click", playAgain);