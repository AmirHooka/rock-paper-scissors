function playGame() {
  let computerScore = 0;
  let userScore = 0;
  let round = 0;
  function getComputerChoice() {
    let rndNum = Math.random();
    let computerChoice;
    if (rndNum <= 0.33) {
      computerChoice = "rock";
    } else if (rndNum <= 0.66) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    
    console.log("Computer chose " + computerChoice);
    return computerChoice;
  }
  // function getUserChoice() {
  //   let userChoice = prompt("Choose").toLowerCase();
  //   console.log("user chose " + userChoice);
  //   return userChoice;
  // }
  
  function playRound(userChoice, computerChoice) {
    if (!game) {
      return;
    }

    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      userScore++;
    } else if (userChoice === "rock" && computerChoice === "paper") {
      computerScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
      userScore++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      userScore++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
    }

    round += 1;

    if (round >= maxRounds) {
      game = false;
    }
  }
  let game = true;
  const maxRounds = 5;
  const rockBtn = document.querySelector(".playerBtn#rock");
  const paperBtn = document.querySelector(".playerBtn#paper");
  const scissorsBtn = document.querySelector(".playerBtn#scissors");

  const scoreDisplay = document.querySelector("#scoreDisplay");
  const winnerP = document.querySelector("#winnerP");


  rockBtn.addEventListener("click", function (e) {
    playRound(e.target.id , getComputerChoice());
    scoreDisplay.textContent = "User: " + userScore + " Computer: " + computerScore;
    if(!game) {
      if (userScore > computerScore) {
        winnerP.textContent = "USER WON!";
      } else if (userScore < computerScore) {
        winnerP.textContent = "COMPUTER WON!";
      } else {
        winnerP.textContent = "THE GAME WAS A TIE";
      }
    }
  });
  paperBtn.addEventListener("click", function (e) {
    playRound(e.target.id , getComputerChoice());
    scoreDisplay.textContent = "User: " + userScore + " Computer: " + computerScore;
    if(!game) {
      if (userScore > computerScore) {
        winnerP.textContent = "USER WON!";
      } else if (userScore < computerScore) {
        winnerP.textContent = "COMPUTER WON!";
      } else {
        winnerP.textContent = "THE GAME WAS A TIE";
      }
    }
  });
  scissorsBtn.addEventListener("click", function (e) {
    playRound(e.target.id , getComputerChoice());
    scoreDisplay.textContent = "User: " + userScore + " Computer: " + computerScore;
    if(!game) {
      if (userScore > computerScore) {
        winnerP.textContent = "USER WON!";
      } else if (userScore < computerScore) {
        winnerP.textContent = "COMPUTER WON!";
      } else {
        winnerP.textContent = "THE GAME WAS A TIE";
      }
    }
  });




//   //round 1
//   let userChoice = getUserChoice();
//   let computerChoice = getComputerChoice();

//   playRound(userChoice, computerChoice);

//   //round 2
//   userChoice = getUserChoice();
//   computerChoice = getComputerChoice();

//   playRound(userChoice, computerChoice);

//   //round 3
//   userChoice = getUserChoice();
//   computerChoice = getComputerChoice();

//   playRound(userChoice, computerChoice);

//   //round 4
//   userChoice = getUserChoice();
//   computerChoice = getComputerChoice();

//   playRound(userChoice, computerChoice);

//   //round 5
//   userChoice = getUserChoice();
//   computerChoice = getComputerChoice();

//   playRound(userChoice, computerChoice);

//   console.log("Player : " + userScore + " Computer : " + computerScore);

}

playGame();
