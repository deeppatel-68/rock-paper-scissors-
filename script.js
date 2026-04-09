function playGame() {
  //Helper Functions
  // Logic for computer output
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getComputerChoice() {
    let int = getRandomInt(3);
    if (int == 0) {
      return "Rock";
    } else if (int === 1) {
      return "Scissors";
    } else {
      return "Paper";
    }
  }
  // Human Input
  function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
  }

  //Scores
  let humanScore = 0;
  let computerScore = 0;

  // Play a single round
  function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice == "Rock" && computerChoice == "Scissors") ||
      (humanChoice == "Paper" && computerChoice == "Rock") ||
      (humanChoice == "Scissors" && computerChoice == "Paper")
    ) {
      console.log(`You Win! ${humanChoice} beats  ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You Lose! ${computerChoice} beats  ${humanChoice}`);
      computerScore++;
    }
    console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
  }

  //play 5 rounds
  for (let i = i; i <= 5; i++) {
    console.log(`Round${i}:`);
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Game Over!");
  //Final  Result
  if (computerScore == humanScore) {
    console.log(`It's a draw! ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${humanScore} - ${computerScore}`);
  } else {
    console.log(`You win! ${humanScore} - ${computerScore}`);
  }
}

playGame();
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
