
function playGame() {
    let computerScore = 0;
    let humanScore = 0; 
    let round = 0;
    function getComputerChoice() {
        let rndNum = Math.random();
        let computerChoice;
        if (rndNum <= 0.33) {
            computerChoice = "rock"
        } else if (rndNum <= 0.66) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log("Computer chose " + computerChoice);
        return computerChoice;
    }
    function getHumanChoice() {
        let humanChoice = prompt("Choose").toLowerCase();
        console.log("Human chose " + humanChoice);
        return humanChoice;
    }
    function playRound(humanChoice , computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore ++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore ++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore ++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore ++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore ++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore ++;
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a tie!");
        }
    }
    //round 1 
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    playRound(humanChoice , computerChoice);

    //round 2
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    

    playRound(humanChoice , computerChoice);

    //round 3
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    

    playRound(humanChoice , computerChoice);

    //round 4
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    

    playRound(humanChoice , computerChoice);

    //round 5
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    

    playRound(humanChoice , computerChoice);

    console.log("Player : " + humanScore + " Computer : " + computerScore);
}

playGame();