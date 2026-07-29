function playGame() {
  // Select a div
  const div = document.querySelector("div");

  // Create paragraphs
  const roundWinnerAnnouncement = document.createElement("p");
  const humanScoreAnnouncement = document.createElement("p");
  const computerScoreAnnouncement = document.createElement("p");
  const gameWinnerAnnouncement = document.createElement("p");

  // Remove space between score announcements
  humanScoreAnnouncement.style.marginBottom = "0";
  computerScoreAnnouncement.style.marginTop = "0";

  // Append paragraphs
  div.append(roundWinnerAnnouncement, humanScoreAnnouncement, computerScoreAnnouncement, gameWinnerAnnouncement);

  // Create score counters
  let humanScore = 0;
  let computerScore = 0;

  // Create labels
  let humanScoreLabel = document.createTextNode("Player score: ");
  let computerScoreLabel = document.createTextNode("Computer score: ");

  // Create scores
  let humanScoreValue = document.createTextNode(humanScore);
  let computerScoreValue = document.createTextNode(computerScore);

  // First round flag
  let isFirstRound = true;

  // Handle button clicks
  let buttons = document.querySelectorAll("button");
  buttons.forEach(node => node.addEventListener("click", playRound));

  function startGame() {
    humanScoreAnnouncement.append(humanScoreLabel, document.createElement("span"), humanScoreValue);
    computerScoreAnnouncement.append(computerScoreLabel, document.createElement("span"), computerScoreValue);
    isFirstRound = false;
  }

  function getComputerChoice() {
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (randNum) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
    }
  }

  function playRound(event) {
    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    if (isFirstRound) startGame();
    announceRoundWinner(humanChoice, computerChoice);
    if (humanScore === 5 || computerScore === 5) endGame();
  }

  function announceRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundWinnerAnnouncement.textContent = `It's a tie. You both chose ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      roundWinnerAnnouncement.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
      humanScoreValue.nodeValue = ++humanScore;
    } else {
      roundWinnerAnnouncement.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
      computerScoreValue.nodeValue = ++computerScore;
    }
  }

  function announceGameWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      gameWinnerAnnouncement.textContent = "You won the game! Reload the page to play again"
    } else if (computerScore > humanScore) {
      gameWinnerAnnouncement.textContent = "You lost the game! Reload the page to play again"
    }
  }

  function deactivateGame() {
    buttons.forEach(node => {
      node.removeEventListener("click", playRound);
      node.disabled = true;
      node.style.cursor = "not-allowed";
    });
  }

  function endGame() {
    announceGameWinner(humanScore, computerScore);
    deactivateGame();
  }
}

playGame();
