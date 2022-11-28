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

