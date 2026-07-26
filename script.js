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

function getHumanChoice() {
  return prompt("Your choice: ", "");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert(`It's a tie. You both chose ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      alert(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    } else {
      alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`)
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    playRound(humanChoice, computerChoice);
  }
}

playGame();
