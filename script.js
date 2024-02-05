let playerWins = 0;
let computerWins = 0;
let statText = document.querySelector('.results');
let roundText = document.createElement('p');
let playerWinsText = document.createElement('p');
let computerWinsText = document.createElement('p');
let resultsText = document.createElement('p');
statText.appendChild(roundText);
statText.appendChild(playerWinsText);
statText.appendChild(computerWinsText);
statText.appendChild(resultsText);
playerWinsText.textContent = "Player Wins: " + playerWins;
computerWinsText.textContent = "Computer Wins: " + computerWins;
let round = 0;


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

let playRound = function(e) {
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    result = win(playerSelection, computerSelection);

    switch(result) {
        case 1:
            roundText.textContent = ("You Win! " + playerSelection + " beats " + computerSelection);
            playerWins++;
            playerWinsText.textContent = "Player Wins: " + playerWins;
            break;
        case 0:
            roundText.textContent = ("You Tie!");
            break;
        case -1:
            roundText.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection);
            computerWins++;
            computerWinsText.textContent = "Computer Wins: " + computerWins;
            break;
        default:
            roundText.textContent = ("Unable to process game! Did you enter valid input?");
            break;
    }
    round++;
    if(round >= 5){
        playerWins >= computerWins ? 
            resultsText.textContent = "Congrats! You Won!" :
            resultsText.textContent = "You Lose! Better Luck Next Time!";
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
        });    
    }
}

let buttons = document.querySelectorAll('button.move');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

