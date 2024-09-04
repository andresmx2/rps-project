let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let countRound = 0;

function resetScore() {

    divResults.textContent = '';
    if (humanScore >= 5 || computerScore >= 5) {
        countRound = 0;
        humanScore = 0;
        computerScore = 0;
    }
}
function getComputerChoice() {
    
    let r = Math.floor(Math.random() * 3);
    return choices[r];
}

function playRound(humanChoice, computerChoice) {
    let message = '';
    resetScore();
    countRound++;

    message += `Round ${countRound}: `;

    if (humanChoice == computerChoice) {
        message += 'Repeat round';
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        message += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        message += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        message += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        message += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    const roundResult = document.createElement('p');
    roundResult.textContent = message;
    divResults.appendChild(roundResult);

    const score = document.createElement('p');
    score.textContent = `Score >> Human: ${humanScore} - Computer: ${computerScore}`;
    divResults.appendChild(score);

    const winnerMsg = document.createElement('p');
    if (humanScore == 5) {
        winnerMsg.textContent = 'Congrats, You win!!';
    } else if (computerScore == 5) {
        winnerMsg.textContent = 'Sorry, You lose!!';
    }
    divResults.appendChild(winnerMsg);

}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function () {
    playRound('paper', getComputerChoice());
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function () {
    playRound('scissors', getComputerChoice());
});

const divResults = document.querySelector('#results');

