// Computer
let newResults =[];

// const result = document.getElementById("result");



const btns = document.querySelectorAll;("#btn");

const buttons = document.querySelectorAll("#btn")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const roundResult = playRound(button.value, getComputerChoice());
    newResults.push(roundResult);
    console.log(roundResult);
    result.innerHTML = newResults.join('<br>');
    
  });
  
});

// btns.forEach((button)) {}
// addEventListener("click",() => {
//     alert("hello");
// });



function getComputerChoice() {
    let cpuChoice = ["rock","paper","scissors"];
    
    return cpuChoice [Math.floor(Math.random()*cpuChoice.length)];
    
    };


// player change to add onclick fuction to button 

// function getPlayerChoice(){
//     let playerChoice = btns;
//     return playerChoice
// };
// // 


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
    

// adding results










// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = newResults;

// result.appendChild(content);



   



// REMOVED FIRST STEP TOO ui CHANGE

//  function game() {
//         for (let i = 0; i < 3; i++) {
//             let playerChoice = getPlayerChoice();
//             let computerChoice = getComputerChoice();
//             let result = playRound(playerChoice, computerChoice);
//             console.log(`Round ${i + 1}: Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${result}`);
//         }
//     }

// game()


// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

// For now, remove the logic that plays exactly five rounds.

// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score, and announce a winner of the game once one player reaches 5 points.

// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.




// change players choice to take an button input 
// create a results output wit for loop 

// declare winner keep track of score 
// display play and PC score 






