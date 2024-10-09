let computerChoice = 5;
let humanChoice = 10;

function getComputerChoice () {
    computerNum = Math.round(Math.random() * 2.49);
    console.log(computerNum);
    switch (computerNum) {
        case computerNum = 0 :
        computerChoice = "rock";
        return 0;
        case computerNum = 1 :
        computerChoice = "paper";
        return 1;
        case computerNum = 2 :
        computerChoice = "scissors";
        return 2;
    }
}

function getHumanChoice () {
    //Ask what they choose and turn it into human choice (only string)
    let humanChoice = prompt("Choose either Rock, Paper, or Scissors")
    //Make human choice all lowercarse
    humanChoice = (humanChoice.toLowerCase())
    console.log(humanChoice);
    //Turn human chocie into a number so we can compute it
    switch (humanChoice) {
        case humanChoice = "rock":
        return 0;
        case humanChoice = "paper":
        return 1;
        case humanChoice = "scissors":
        return 2;
        //Check if human choice is equal to the available choices. If not, tell human to try again
        default: 
        alert("Please Enter Choice Again");
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound (humanSelection, computerSelection)  {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        //Calculate who won based on the number values given
        if (humanSelection - computerSelection == 0) {
            //play again no add point
            alert("It is a tie!");
        } else if (humanSelection - computerSelection == 1 || 
                    humanSelection - computerSelection == -2) {
            humanScore = ++humanScore;
            alert("You won this round! Your score is " + humanScore + " now!");
            console.log(humanScore);
        } else if (humanSelection - computerSelection == -1 || 
                    humanSelection - computerSelection == 2) {
            computerScore = ++computerScore;
            alert("The computer won this round! The computer's score is " + computerScore + " now!");
            console.log("computer");
            console.log(computerScore);
        } else {
            console.log(humanSelection - computerSelection);
            console.log(humanSelection);
            console.log(computerSelection);
            console.log("The calculations aren't right");
        }   
    }    
    // Play the game 5 times
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    //Declare who won
        if (humanScore > computerScore) {
            alert ("You won against the computer!");
        } else if (computerScore > humanScore) {
            alert ("The computer won against you!");
    //Later, make a loop here
        } else {
            playRound();
            alert ("It is a tie! I will make this go on later.")}
}
playGame();



