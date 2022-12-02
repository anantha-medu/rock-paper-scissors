// //Function to generate COmputer's choice
// function getComputerChoice()
// {
//     let computerNumber = Math.floor(Math.random()*3 +1);
//     let computerChoice;

//     switch(computerNumber)
//     {
//         case 1:
//             computerChoice = "rock";
//             break;
        
//         case 2:
//             computerChoice = "paper";
//             break;

//         case 3:
//             computerChoice = "scissors";
//             break;
//     }

//     return computerChoice;
// }

// //Function to get player's selection
// function playerSelection()
// {
//     let playerChoicePrompt = prompt("What is your choice?");
//     let playerChoice = playerChoicePrompt.toLowerCase();

//     while((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors"))
//     {
//         playerChoicePrompt = prompt("Enter Valid Choice");
//         playerChoice = playerChoicePrompt.toLowerCase();
//     }

//     return playerChoice;

// }


// //Function to play a round of the game
// function playRound()
// {
//     const computerChoice = getComputerChoice();
//     const playerChoice = playerSelection();
//     let result;
//     // console.log(computerChoice);
//     // console.log(playerChoice);

//     if(computerChoice === playerChoice)
//     {
//         console.log("It's a draw");
//         return result = "Draw";
//     }

//     else if((computerChoice==="rock" && playerChoice==="scissors") || (computerChoice==="paper" && playerChoice==="rock") ||  (computerChoice==="scissors" && playerChoice==="paper"))
//     {
//         console.log("You lose the round! Computer wins!");
//         return result = "Lose";
//     }

//     else
//     {
//         console.log("You win the round!");
//         return result = "Win";
//     }
// }

// //Function to play 5 rounds of game
// function game()
// {
//     let playerScore = 0, computerScore = 0;

//     for(let i=0; i<5; i++)
//     {
//         console.log("Round "+ (i+1));
//         let roundResult = playRound();
//         switch(roundResult)
//         {
//             case "Win":
//                 playerScore+=1;
//                 continue;
            
//             case "Lose":
//                 computerScore+=1;
//                 continue;

//             case "Draw":
//                 continue;
//         }
//     }

//     if(playerScore>computerScore)
//     {
//         alert("You win the game!");
//     }

//     else if(computerScore===playerScore)
//     {
//         alert("You drew the game!");
//     }

//     else
//     {
//         alert("You lost the game!");
//     }
// }

// game();

const choiceSelection = Array.from(document.querySelectorAll('#player-selections .options'));
choiceSelection.forEach(choice => choice.addEventListener("click", selectionDisplay));

function selectionDisplay(e)
{
    const choiceId = e.target.id;
    const playerChoice = document.getElementById("player-choice");
    if(playerChoice.src="img/question-mark.png")
    {
        playerChoice.src=e.target.src;
        playerChoice.setAttribute("data-choice", choiceId);
    }
}

let enlarge = (e) => e.target.classList.add('enlarge');

choiceSelection.forEach(choice => choice.addEventListener("mouseover", enlarge));

