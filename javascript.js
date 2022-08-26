const myArray = ['Rock','Paper','Scissors'];
function getComputerChoice(){
    return myArray[~~(Math.random()*myArray.length)];
}

let computerSelection;
let playerSelection;
let playerScore;
let computerScore;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
button.addEventListener("click",() => {
playerSelection=button.innerText.toLowerCase();
playRound(playerSelection,computerSelection);
if(playerScore===5 && computerScore===5){
    declareWinner();
}
});
});

function game(){
    computerScore = 0;
    playerScore = 0;
for (let i=0; i<5; i++){
    onUserInput();
}
console.log(declareWinner());
}

function declareWinner(){
    if(computerScore==playerScore){
        alert(computerScore +'-'+ playerScore +'\nTie Game!')
        return computerScore +'-'+ playerScore +'\nTie Game!';
    }else if (playerScore>computerScore) {
        alert(playerScore + '-' + computerScore + '\nYou win!!');
        return playerScore + '-' + computerScore + '\nYou win!!';
    }else {
        alert(playerScore + '-' + computerScore + '\nYou lost. Better luck next time!');
        return playerScore + '-' + computerScore + '\nYou lost. Better luck next time!';
    }
}

function onUserInput() {
    playerSelection = prompt('Rock, Paper, or Scissors?', '');
      if ((playerSelection.toLowerCase()=='rock')
          ||(playerSelection.toLowerCase()=='paper')
          ||(playerSelection.toLowerCase()=='scissors')) {
        console.log(playRound(playerSelection,computerSelection));
      } else {
      alert('Thats not a valid choice.');
      onUserInput();
    }
}

  function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    if(playerSelection==computerSelection){
        alert("Tie Game!");
        return 'Tie Game\nComputer Score: ' + computerScore + '\nYour Score: ' + playerScore;
    } 
    else if((computerSelection=='rock' && playerSelection=='paper') 
            || (computerSelection=='paper' && playerSelection=='scissors') 
            || (computerSelection=='scissors' && playerSelection=='rock'))    
        {
            alert('You loose! ' +computerSelection+ ' beats ' +playerSelection)
            return 'Computer Score: ' + ++computerScore + '\nYour Score: ' + playerScore;
        } 
    else{
            console.log('You Win! '+playerSelection+ ' beats ' +computerSelection)
        }
    }
    
