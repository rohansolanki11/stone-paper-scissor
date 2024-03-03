let stone = document.querySelector('#stone');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let message = document.querySelector('#result');
let scores = document.querySelector('#scores');
let userScore = 0;
let computerScore = 0;

stone.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
    message.textContent = playRound("stone",computerSelection);
    scores.textContent = "User score:" + userScore + " Computer Score: " + computerScore;
    if(userScore===5){
        scores.textContent = "You are the winner!"
    }
    else if(computerScore===5){
        scores.textContent = "Computer wins!"
    }
});

paper.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
    message.textContent = playRound("paper",computerSelection);
    scores.textContent = "User score:" + userScore + " Computer Score: " + computerScore;
    if(userScore===5){
        scores.textContent = "You are the winner!"
    }
    else if(computerScore===5){
        scores.textContent = "Computer wins!"
    }
});

scissor.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
    message.textContent = playRound("scissors",computerSelection);
    scores.textContent = "User score:" + userScore + " Computer Score: " + computerScore;

    if(userScore===5){
        scores.textContent = "You are the winner!"
    }
    else if(computerScore===5){
        scores.textContent = "Computer wins!"
    }
});

function getComputerChoice(){
    let n = Math.floor(Math.random()*3);
    if(n==0) return "Stone";
    else if(n==1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=="stone"){
        if(computerSelection=="Paper"){
            computerScore++;
            return "You lose! Paper beats stone.";
        }
        else if(computerSelection=="Scissors"){
            userScore++;
            return "You win! Stone beats scissors.";
        }
        else{
            return "Draw!";
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="Scissors"){
            computerScore++;
            return "You lose! Scissors beat paper.";
        }
        else if(computerSelection=="Stone"){
            userScore++;
            return "You win! Paper beats stone.";
        }
        else{
            return "Draw!";
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="Stone"){
            computerScore++;
            return "You lose! Stone beats scissors.";
        }
        else if(computerSelection=="Paper"){
            userScore++;
            return "You win! Scissors beat paper.";
        }
        else{
            return "Draw!";
        }
    }
    else{
        return "Yowie Wowie! You have encountered an error!";
    }
}

function game(){
    let playerSelection = prompt("Stone, Paper or Scissors?");
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}