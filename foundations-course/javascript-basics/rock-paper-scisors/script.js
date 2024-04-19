document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        playRound(button.id);
      });
    });
  
    function playRound(playerSelection) {
      const computerSelection = computerPlay();
  
      const result = getResult(playerSelection, computerSelection);
  
      displayResult(result, playerSelection, computerSelection);
    }
  
    function computerPlay() {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getResult(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    }
  
    function displayResult(result, playerSelection, computerSelection) {
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = `${result} You chose ${playerSelection}, computer chose ${computerSelection}.`;
    }
  });
  