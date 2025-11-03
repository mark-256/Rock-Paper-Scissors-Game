// Load scores from localStorage
let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;
let draws = parseInt(localStorage.getItem("draws")) || 0;

// Update score display
function updateScore() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("draws").textContent = draws;
}

// Save scores to localStorage
function saveScore() {
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
  localStorage.setItem("draws", draws);
}

// Initialize score on load
updateScore();

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
    draws++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    wins++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    losses++;
  }

  // Add animation class to result
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
  resultElement.classList.add("animate");

  // Remove animation class after animation ends
  setTimeout(() => {
    resultElement.classList.remove("animate");
  }, 500);

  // Update and save score
  updateScore();
  saveScore();
}
