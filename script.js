//select the heater
const header = document.querySelector("header");
const score = document.querySelector(".score");
//set player and computer score to 0
let playerScore = 0;
let computerScore = 0;
let currentResult = "";
//generate computer selection
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
//play the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    checkScore();
    computerScoreDisplay.textContent = computerScore;
    scoreInfo.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    scoreInfo.textContent = `You won this round ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    checkScore();
    computerScoreDisplay.textContent = computerScore;
    scoreInfo.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    scoreInfo.textContent = `You won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    checkScore();
    computerScoreDisplay.textContent = computerScore;
    scoreInfo.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    scoreInfo.textContent = `You won this round ${playerSelection} beats ${computerSelection}`;
  } else scoreInfo.textContent = "This was a draw, please play one more.";
}
//set player selection and play a round when clicking a button.
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});
//create div element to hold both scores.
const div = document.createElement("div");
//add css class 'score'
div.classList.add("score");
//append the div created to the header.
header.appendChild(div);
//create 2x h2 elements to display the scores
const playerScoreDisplay = document.createElement("h2");
const computerScoreDisplay = document.createElement("h2");
let scoreInfo = document.createElement("h3");
// create final result and a display it.
const line = document.createElement("h2");
const winner = document.createElement("h4");
line.textContent = "-";
//style scoreInfo
scoreInfo.setAttribute("style", "color: grey; font-size: 14px");

//add class playerScoreDisplay and computerScoreDisplay to the h2
playerScoreDisplay.classList.add("playerScoreDisplay");
computerScoreDisplay.classList.add("computerScoreDisplay");
//append h2 to the div created
div.appendChild(playerScoreDisplay);
div.appendChild(line);
div.appendChild(computerScoreDisplay);
score.appendChild(scoreInfo);
//set the text content to display the right result
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
scoreInfo.textContent = currentResult;
//function checks for the score and when it's 5 it should display the winner
function checkScore() {
  if (playerScore == 5) {
    div.removeChild(playerScoreDisplay);
    div.removeChild(computerScoreDisplay);
    div.removeChild(line);
    winner.textContent =
      "Congratulations, you beat the computer. Refresh the page to play again";
    div.appendChild(winner);
  } else if (computerScore == 5) {
    div.removeChild(playerScoreDisplay);
    div.removeChild(computerScoreDisplay);
    div.removeChild(line);
    winner.textContent =
      "Unfortunately, you lost against the computer. Refresh the page to play again.";
    div.appendChild(winner);
  }
}
//reset the game using reset
