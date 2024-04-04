const choices = ["rock", "paper", "scissor"];
const playerOutput = document.querySelector(".player-choice");
const cpuOuput = document.querySelector(".cpu-choice");
const resultOuput = document.querySelector(".result");
const pointsPlayer = document.querySelector(".playerPoints");
const pointsCpu = document.querySelector(".cpuPoints");
let pointsP = 0;
let pointsC = 0;
let result;

function playgame(playerChoice) {
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === cpuChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        cpuChoice === "scissor" ? pointsAddP() : pointsAddC();
        break;
      case "paper":
        cpuChoice === "rock" ? pointsAddP() : pointsAddC();
        break;
      case "scissor":
        cpuChoice === "paper" ? pointsAddP() : pointsAddC();
        break;
    }
  }
  pointsPlayer.innerHTML = pointsP;
  pointsCpu.innerHTML = pointsC;
  playerOutput.innerHTML = `You choose: ${playerChoice}`;
  cpuOuput.innerHTML = `CPU choose: ${cpuChoice}`;
  resultOuput.innerHTML = result;
}

function pointsAddP() {
  result = "YOU WIN!";
  pointsP = pointsP + 1;
}
function pointsAddC() {
  result = "YOU LOOSE";
  pointsC = pointsC + 1;
}
