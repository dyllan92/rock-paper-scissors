let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 8)
    if (computerChoice <= 2) {
        computerChoice = "rock"
    } else if (computerChoice > 2 && computerChoice < 6) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    
    return computerChoice
};

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors")
    return humanChoice
};
function playRound(humanChoice, computerChoice) { 
   
    if (humanChoice === computerChoice) {
        return "It's a draw, shoot again."
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundCount++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        roundCount++;
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
    } else if (
        humanChoice != "rock" ||
        humanChoice != "paper" ||
        humanChoice != "scissors"
    ) {
        console.log("Please only choose Rock, Paper, or Scissors")
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
