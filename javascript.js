const myArray = ['Rock','Paper','Scissors'];
function getComputerChoice(){
    return myArray[~~(Math.random()*myArray.length)];
}

playerSelection = "rock";
playerSelection = playerSelection.toLowerCase();
computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection,computerSelection){
if(playerSelection==computerSelection){
    console.log("You Tie!");
} else if((computerSelection=='rock' && playerSelection=='paper') 
        || (computerSelection=='paper' && playerSelection=='scissors') 
        || (computerSelection=='scissors' && playerSelection=='rock'))    
    {
    console.log('You loose! ' +computerSelection+ ' beats ' +playerSelection)
    } 
    else{
        console.log('You Win! '+playerSelection+ ' beats ' +computerSelection)
    }
}


console.log(playRound(playerSelection,computerSelection))