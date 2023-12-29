function getComputerChoice(){
    let n = Math.floor(Math.random()*3);
    if(n==0) return "Stone";
    else if(n==1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=="stone"){
        if(computerSelection=="Paper"){
            return "You lose! Paper beats stone";
        }
        else if(computerSelection=="Scissors"){
            return "You win! Stone beats scissors";
        }
        else{
            return "Draw!";
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="Scissors"){
            return "You lose! Scissors beat paper";
        }
        else if(computerSelection=="Stone"){
            return "You win! Paper beats stone";
        }
        else{
            return "Draw!";
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="Stone"){
            return "You lose! Stone beats scissors";
        }
        else if(computerSelection=="Paper"){
            return "You win! Scissors beat paper";
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