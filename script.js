function getComputerChoice () {
    return Math.round(Math.random() * 2);
}

function getHumanChoice () {
    //Ask what they choose and turn it into human choice (only string)
    let humanchoice = prompt("Choose either Rock, Paper, or Scissors")
    console.log(humanchoice)
    //Make human choice all lowercarse
    humanchoice = (humanchoice.toLowerCase())
    console.log(humanchoice)
    //Check if human choice is equal to the available choices. If not, tell human to try again
    //Turn human chocie into a number so we can compute it
    switch (humanchoice) {
        case humanchoice = "rock" : humanchoice = 0;
        console.log(humanchoice);
        break;
        case humanchoice = "paper" : humanchoice = 1;
        console.log(humanchoice);
        break;
        case humanchoice = "scissors": humanchoice = 2;
        console.log(humanchoice)
        break;
    }
    }