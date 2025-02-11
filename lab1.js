//Members: Rudrakumar Patel. Student ID: 200564089
//Members: Shivam Patel. Student ID = 200564889

const prompt = require("prompt-sync")();

let userSelection = prompt(
  "Enter your choice (ROCK, PAPER, or SCISSORS): "
).toUpperCase();

while (!["ROCK", "PAPER", "SCISSORS"].includes(userSelection)) {
  console.log("Invalid choice! Please enter ROCK, PAPER, or SCISSORS.");
  userSelection = prompt(
    "Enter your choice (ROCK, PAPER, or SCISSORS): "
  ).toUpperCase();
}

let randomNumber = Math.random();
let computerSelection =
  randomNumber < 0.34 ? "PAPER" : randomNumber < 0.67 ? "SCISSORS" : "ROCK";

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "ROCK" && computer === "SCISSORS") ||
    (user === "SCISSORS" && computer === "PAPER") ||
    (user === "PAPER" && computer === "ROCK")
  ) {
    return "User Wins!";
  } else {
    return "Computer Wins!";
  }
}

let result = getWinner(userSelection, computerSelection);

console.log(`User selected: ${userSelection}`);
console.log(`Computer selected: ${computerSelection}`);
console.log(result);
