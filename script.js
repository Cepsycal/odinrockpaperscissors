let humanscore = 0;
let computerscore = 0;
let computerChoice = 0;
let humanNum = 0;

function getComputerChoice () {
    let computerNum = Math.round(Math.random() * 2);
    switch (computerNum) {
        case computerNum = 0 : computerChoice = "rock";
        return 0;
        case computerNum = 1 : computerChoice = "paper";
        return 1;
        case computerNum = 2 : computerChoice = "scissors";
        return 2;
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
        case humanChoice = "rock" : humanNum = 0;
        return rock;
        case humanChoice = "paper" : humanNum = 1;
        return 1;
        case humanChoice = "scissors": humanNum = 2;
        return 2;
        default: alert("Please Try Again")
    }
    }

function playRound (humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();