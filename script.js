const moves = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
}

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

//Return:
// 1 for win
// 0 for tie
// -1 for lose
function win(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "Rock":
            switch(computerSelection) {
                case "Rock":
                    return 0;
                case "Paper":
                    return -1;
                case "Scissors":
                    return 1;
                default:
                    return null;
            }
        case "Paper":
            switch(computerSelection) {
                case "Rock":
                    return 1;
                case "Paper":
                    return 0;
                case "Scissors":
                    return -1;
                default:
                    return null;
            }
        case "Scissors":
            switch(computerSelection) {
                case "Rock":
                    return -1;
                case "Paper":
                    return 1;
                case "Scissors":
                    return 0;
                default:
                    return null;
            }
        default:
            return null;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    return win(playerSelection, computerSelection);

}

function playGame() {
    let playerWins = 0;
    let playerSelection;
    let computerSelection;
    let result;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        playerWins += result;

        switch(result) {
            case 1:
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
                break;
            case 0:
                console.log("You Tie!");
                break;
            case -1:
                console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                break;
            default:
                console.log("Unable to process game! Did you enter valid input?");
                i--;
                break;
        }
        
    }

    if(playerWins > 0) {
        console.log("Congrats! You beat the Computer!");
    } else if (playerWins === 0) {
        console.log("Congrats! You tied the Computer!");
    } else {
        console.log("Better luck next time!");
    }
}

