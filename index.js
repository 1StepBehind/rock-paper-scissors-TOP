// Computer


function getComputerChoice() {
    let cpuChoice = ["rock","paper","scissors"];
    
    return cpuChoice [Math.floor(Math.random()*cpuChoice.length)]
    

}
// console.log(getComputerChoice(cpuChoice));


// let computerSelection = getComputerChoice(cpuChoice);


// player


function getPlayerChoice(){
    let playerChoice = prompt ("rock,paper,scissors");
    return playerChoice
}

// console.log (playerChoice)

// game
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


function playRound() {
    getPlayerChoice();
    getComputerChoice();
    if (playerSelection === computerSelection)
    {
        console.log("draw")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" )
    {
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "paper" && computerSelection == "rock") 
    {
        console.log("You Win! Paper beats Rock")
    } 

    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        console.log("You Win! Scissors beats Paper")
    }

    else if (playerSelection == "rock" && computerSelection == "paper" )
    {
        console.log("You lose! Paper beats Rock")
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") 
    {
        console.log("You Lose! Scissors beats Paper")
    } 

    else if (playerSelection == "scissors" && computerSelection == "rock") 
    {
        console.log("You Lose! Rock beats Scissors")
    }




    return playerSelection, computerSelection;

}


function game() {
    console.log(playRound());
    
    console.log(playRound()) ;
    // console.log()
    console.log(playRound()) ;
    // console.log()
    console.log(playRound()) ;
    // console.log()
    console.log(playRound()) ;
}

console.log(game())
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

















// "You Lose! Paper beats Rock"
// "You Lose! Rock beats Scissors"
// "You Lose! Scissors beats Paper"
// "You Win! Paper beats Rock"
// "You Win! Rock beats Scissors"
// "You Win! Scissors beats Paper"
// refer back to problem solving model

