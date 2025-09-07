function getComputerChoice() {
    let value = Math.random();
    let compChoice;
    if(value <= 0.33){
        compChoice = "Rock";
    } else if(value <= 0.66 && value > 0.33) {
        compChoice = "Paper";
    } else if(value <= 0.99 && value > 0.66) {
        compChoice = "Scissors";
    }
    return compChoice;
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}



const userSelection = getHumanChoice;
const compSelection = getComputerChoice;

function playGame() {
    let userScore = 0;
let compScore = 0;

function playRound(humanChoice, computerChoice){
    const normHumanChoice = humanChoice;
    const normComputerChoice = computerChoice;
    let result;
    if(normHumanChoice == "Rock"){
        if(normComputerChoice == "Paper"){
            result = "Lose";
        } else if(normComputerChoice == "Scissor") {
            result = "Win";
        } else if(normComputerChoice == "Rock"){
            result = "Draw";
        }
    }
    if(normHumanChoice == "Paper"){
        if(normComputerChoice == "Paper"){
            result = "Draw";
        } else if(normComputerChoice == "Scissors") {
            result = "Lose";
        } else if(normComputerChoice == "Rock"){
            result = "Win";
        }
    }
    if(normHumanChoice == "Scissors"){
        if(normComputerChoice == "Paper"){
            result = "Win";
        } else if(normComputerChoice == "Scissors") {
            result = "Draw";
        } else if(normComputerChoice == "Rock"){
            result = "Lose";
        }
    }
    if(result == "Win"){
        userScore += 1;
    } else if(result == "Lose"){
        compScore += 1;
    }
}
    for(var i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("You won " + userScore);
    console.log("Your opponent won " + compScore);
    
    if( userScore > compScore){
        console.log("You win!");
    } else if(userScore < compScore){
        console.log("You lose!");
    } else if(userScore == compScore){
        console.log("Draw!");
    }
}
playGame();
