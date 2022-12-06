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


//UI related

//to display the player's choice when clicked on either of choice images
const choiceSelection = Array.from(document.querySelectorAll('#player-selections .options'));
choiceSelection.forEach(choice => choice.addEventListener("click", selectionDisplay));
const playerChoice = document.getElementById("player-choice");
const compChoiceDisplay = document.getElementById("comp-choice");

function selectionDisplay(e)
{
    const choiceId = e.target.id;
    
    if(playerChoice.src="img/question-mark.png")
    {
        playerChoice.src=e.target.src;
        playerChoice.setAttribute("data-choice", choiceId);
        compChoiceDisplay.src = "img/question-mark.png";
        playerChoice.classList.remove('unclicked');
    }

    playerChoice.parentElement.classList.remove('winner', 'loser');
    compChoiceDisplay.parentElement.classList.remove('winner', 'loser');
    
}

// To enlarge the choice images when hovered over
let enlarge = (e) => {
    // e.target.classList.add('enlarge');
    e.target.parentElement.classList.add('enlarge');
}

let deEnlarge = (e) => e.target.parentElement.classList.remove('enlarge');

choiceSelection.forEach(choice => choice.addEventListener("mouseover", enlarge));

choiceSelection.forEach(choice => choice.addEventListener("mouseout", deEnlarge));



// to display the score
const playerScoreDisplay = document.querySelector('#player-score');
const compScoreDisplay = document.querySelector('#comp-score');

let playerScore = 0;
let compScore = 0;


// to display winner and loser color after each round

let showResultColor = (winner, loser) =>
{
    winner.parentElement.classList.toggle('winner');
    loser.parentElement.classList.toggle('loser');
}




// Game  logic related

// to get computer's choice and display it
function getComputerChoice()
{
    let computerNumber = Math.floor(Math.random()*3 +1);
    let computerChoice;

    switch(computerNumber)
    {
        case 1:
            computerChoice = "rock";
            compChoiceDisplay.src="img/rock.png";
            break;
        
        case 2:
            computerChoice = "paper";
            compChoiceDisplay.src="img/paper.png";
            break;

        case 3:
            computerChoice = "scissors";
            compChoiceDisplay.src="img/scissors.png";
            break;
    }

    return computerChoice;
}

const playRoundButton = document.getElementById('play-round-btn');

playRoundButton.addEventListener("click",game);

function getPlayerChoice()
{
    const playerChoice = document.getElementById("player-choice");
    if(playerChoice.getAttribute("data-choice") === null)
    {
        alert("Select a choice from the available options!!!");
        return;
    }

    else if(playerChoice.classList.contains('unclicked'))
    {
        alert("Select a choice from the available options!!!");
        return;
    }

    else
    {
        return playerChoice.getAttribute("data-choice");
    }

}


//Function to play a round of the game

const resultDisplay = document.querySelector('#result-display');

function playRound()
{
    const computerChoice = getComputerChoice();
    const playerSelection = getPlayerChoice();
    // console.log(computerChoice);
    // console.log(playerChoice);
    resultDisplay.style.display = 'block';

    if(computerChoice === playerSelection)
    {
        // console.log("It's a draw");
        resultDisplay.textContent = "It's a draw";
        return "Draw";
    }

    else if((computerChoice==="rock" && playerSelection==="scissors") || (computerChoice==="paper" && playerSelection==="rock") ||  (computerChoice==="scissors" && playerSelection==="paper"))
    {
        // console.log("You lose the round! Computer wins!");
        resultDisplay.textContent = "You lose the round! Computer wins!";
        showResultColor(compChoiceDisplay, playerChoice);
        return "Lose";
    }

    else
    {
        // console.log("You win the round!");
        resultDisplay.textContent = "You win the round!";
        showResultColor(playerChoice, compChoiceDisplay);
        return "Win";
    }
}

// to Update player score after each round

function updateScore(text)
{
    if(text === 'Win')
    {
        playerScore += 1;
    }

    else if(text === 'Lose')
    {
        compScore += 1;
    }

        playerScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = compScore;
}

// to display final result

const finalResultText = document.getElementById('final-result');

function displayFinalResult()
{
    document.getElementById('play-round-btn').style.display = 'none';
    resetButton.textContent = "PLAY AGAIN"
    finalResultText.style.display = 'block';
    if(playerScore > compScore)
    {
        finalResultText.textContent = "Congratulations! You won the game!";
    }
    else
    {
        finalResultText.textContent = "Sorry! You lost the game. Better luck next time!";
    }

    finalResultText
}


// final game function to connect all functions and streamline them
function game()
{
    result = playRound();
    playerChoice.classList.add('unclicked');
    updateScore(result);
    if(playerScore===5 || compScore === 5)
    {
        displayFinalResult();
    }

}

// reset button when clicked

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", resetOnClick);

function resetOnClick()
{
    playerScore = 0;
    compScore = 0;
    
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;

    document.getElementById('play-round-btn').style.display = 'block';
    playerChoice.parentElement.classList.remove('winner', 'loser');
    compChoiceDisplay.parentElement.classList.remove('winner', 'loser');

    resetButton.textContent = "RESTART"

    playerChoice.src = 'img/question-mark.png';
    compChoiceDisplay.src = 'img/question-mark.png';

    resultDisplay.style.display = 'none';
    finalResultText.style.display = 'none';

}

