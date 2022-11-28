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
    let playerChoice = prompt("What is your choice?");
    playerChoice = playerChoice.toLowerCase;

    if(playerChoice==="rock")
    {
        return 
    }
}

// let computerChoice = getComputerChoice();
// console.log(computerChoice);