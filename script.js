let humanscore = 0;
let computerscore = 0;

function getComputerChoice () {
    return Math.round(Math.random() * 2);
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
        case humanChoice = "rock" : humanchoice = 0;
        return 0;
        break;
        case humanChoice = "paper" : humanchoice = 1;
        return 1;
        break;
        case humanChoice = "scissors": humanchoice = 2;
        return 2;
        break;
    }
    }