//set values
let t = "It's a tie! Let's play again!"

let a = "You win! Rock beats Scissors"
let b = "You win! Paper beats rock"
let c = "You win! Scissors beats paper"

let x = "You lose! Rock beats Scissors"
let y = "You lose! Paper beats rock"
let z = "You lose! Scissors beats paper"

let computerScore = 0
let playerScore = 0

//function chooses 1 of 3 values
function computerPlay(oneOfThree) {
    const options = [
        "rock",
        "paper",
        "scissors"
    ];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

//console.log(computerPlay());

function round(playerSelection, computerSelection) {

    //rock
if (playerSelection.toLowerCase() === 'rock'){
    if (computerSelection === 'rock') {
        alert(t)
    }
    else if (computerSelection === 'paper'){
        alert(y)
        computerScore++
    }
    else {
        alert(a)
        playerScore++
    }
}

    //paper
    else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'paper') {
            alert(t)
        }
        else if (computerSelection === 'scissors'){
            alert(z)
            computerScore++
        }
        else {
            alert(b)
            playerScore++
        }
    }
    
    //scissors
    else if (playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'scissors') {
            alert(t)
        }
        else if (computerSelection === 'rock'){
            alert(x)
            computerScore++
        }
        else {
            alert(c)
            playerScore++
        }
    }
    else {
        prompt('rock, paper, or scissors?')
    }
}

function game(){
    computerScore = 0
    playerScore = 0
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        round(playerSelection, computerSelection)
          
    }
    if(playerScore > computerScore){
        console.log('You win the game')
    }
    else if(playerScore < computerScore){
        console.log('You lose the game')
    }
    else if(playerScore === computerScore){
        console.log('Draw')
    }
}

game()









