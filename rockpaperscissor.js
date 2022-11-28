function getComputerChoice()
{
    let computerNumber = Math.floor(Math.random()*3 +1);
    
    switch(computerNumber)
    {
        case 1:
            return 'rock';
            break;
        
        case 2:
            return 'paper';
            break;

        case 3:
            return 'scissors';
            break;
    }
}

//let computerChoice = getComputerChoice();
//console.log(computerChoice);