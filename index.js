// Computer


function getComputerChoice() {
    let cpuChoice = ["rock","paper","scissors"];
    
    return cpuChoice [Math.floor(Math.random()*cpuChoice.length)];
    
    }


// player

function getPlayerChoice(){
    let playerChoice = prompt ("rock,paper,scissors").toLowerCase();
    return playerChoice
}

// const playerSelection = getPlayerChoice()
// const computerSelection = getComputerChoice()


function playRound(playerSelection,computerSelection) {
   
     if (playerSelection == "rock" && computerSelection == "scissors" )
    
     return "You Win! Rock beats Scissors"
    
    else if (playerSelection == "paper" && computerSelection == "rock") 
    
     return "You Win! Paper beats Rock"

    else if(playerSelection == "scissors" && computerSelection == "paper")
    
     return "You Win! Scissors beats Paper"
    

    else if (playerSelection == "rock" && computerSelection == "paper" )
    
     return "You lose! Paper beats Rock"
 
    else if (playerSelection == "paper" && computerSelection == "scissors") 
    
     return "You Lose! Scissors beats Paper"
    

    else if  (playerSelection == "scissors" && computerSelection == "rock") 
    
     return "You Lose! Rock beats Scissors"
   
     else  (playerSelection === computerSelection)
        return "draw"
    }
    




    // return playerSelection, computerSelection;





 function game() {
        for (let i = 0; i < 3; i++) {
            let playerChoice = getPlayerChoice();
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(`Round ${i + 1}: Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${result}`);
        }
    }

game()
    // keep score of wins + losses
    // loop functions??
// }

// play 5 rounds 


// get computer choice
// get play input
// combined both choices into one function
// defined winning conditions
// repeat for 5 rounds
// 



// function game() {
//     for (let i = 0; i < 3; i++) {
//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();
//         let result = playRound(playerChoice, computerChoice);
//         console.log(`Round ${i + 1}: Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${result}`);
    // }













// "You Lose! Paper beats Rock"
// "You Lose! Rock beats Scissors"
// "You Lose! Scissors beats Paper"
// "You Win! Paper beats Rock"
// "You Win! Rock beats Scissors"
// "You Win! Scissors beats Paper"
// refer back to problem solving model

