//Function to generate COmputer's choice
function getComputerChoice()
{
    let computerNumber = Math.floor(Math.random()*3 +1);
    let computerChoice;

    switch(computerNumber)
    {
        case 1:
            computerChoice = "rock";
            break;
        
        case 2:
            computerChoice = "paper";
            break;

        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

//Function to get player's selection
function playerSelection()
{
    let playerChoicePrompt = prompt("What is your choice?");
    let playerChoice = playerChoicePrompt.toLowerCase();

    while((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors"))
    {
        playerChoicePrompt = prompt("Enter Valid Choice");
        playerChoice = playerChoicePrompt.toLowerCase();
    }

    return playerChoice;

}


//Function to play a round of the game
function playRound()
{
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();
    console.log(computerChoice);
    console.log(playerChoice);

    if(computerChoice === playerChoice)
    {
        console.log("It's a draw");
    }

    else if((computerChoice==="rock" && playerChoice==="scissors") || (computerChoice==="paper" && playerChoice==="rock") ||  (computerChoice==="scissors" && playerChoice==="paper"))
    {
        console.log("You lose the round! Computer wins!");
    }

    else
    {
        console.log("You win the round!");
    }
}

playRound();