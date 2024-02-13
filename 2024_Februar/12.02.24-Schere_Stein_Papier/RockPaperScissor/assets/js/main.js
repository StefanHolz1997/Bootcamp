const choices = ["rock", "paper", "scissor"];
const playerOutput = document.querySelector(".player-choice");
const cpuOuput = document.querySelector(".cpu-choice");
const resultOuput = document.querySelector(".result");

function playgame(playerChoice) {
  const cpuChoice = choices[Math.floor(Math.random() * 3)];
  let result;

  if (playerChoice === cpuChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = cpuChoice === "scissor" ? "YOU WIN!" : "YOU LOOSE!";
        break;
      case "paper":
        result = cpuChoice === "rock" ? "YOU WIN!" : "YOU LOOSE!";
        break;
      case "scissor":
        result = cpuChoice === "paper" ? "YOU WIN!" : "YOU LOOSE!";
        break;
    }
  }
  playerOutput.innerHTML = `You choose: ${playerChoice}`;
  cpuOuput.innerHTML = `CPU choose: ${cpuChoice}`;
  resultOuput.innerHTML = result;
}
