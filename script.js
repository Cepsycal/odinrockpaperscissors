let humanscore = 0;
let computerscore = 0;
let computerChoice = 0;
let humanNum = 0;

function getComputerChoice () {
    let computerNum = Math.round(Math.random() * 2);
    switch (computerNum) {
        case computerNum = 0 :
        return "rock";
        case computerNum = 1 :
        return "paper";
        case computerNum = 2 :
        return "scissors";
    }
}

function getHumanChoice () {
    //Ask what they choose and turn it into human choice (only string)
    let humanChoice = prompt("Choose either Rock, Paper, or Scissors")
    console.log(humanChoice)
    //Make human choice all lowercarse
    humanChoice = (humanChoice.toLowerCase())
    console.log(humanChoice)
    //Check if human choice is equal to the available choices. If not, tell human to try again
    //Turn human chocie into a number so we can compute it
    switch (humanChoice) {
        case humanChoice = "rock": 
        return "rock";
        case humanChoice = "paper":
        return "paper";
        case humanChoice = "scissors":
        return "scissors";
        default: alert("Please Enter Choice Again")
    }
    }

function playRound (humanSelection, computerSelection)  {
    console.log(humanSelection);
    console.log(computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();