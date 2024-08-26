let choices = ["rock", "paper", "scissors"];

// console.log("Computer Choice >> " + getComputerChoice());

function getComputerChoice() {
    
    let r = Math.floor(Math.random() * 3);
    console.log(`Computer Choice >> ${choices[r]}`);
    return choices[r];
}

function getHumanChoice() {
    do {
        let hc = prompt("Enter your chice: ").toLowerCase();
        let f = choices.find((x) => x === hc);

        if (f !== undefined)
        {
            console.log("Human Choice >> " + f);
            return hc;
        } else
            console.log("Invalid choice");

    } while (true);
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let countRound = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice) {
            console.log('Repeat round');
            countRound--;
            return;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    for (countRound = 0; countRound < 5; countRound++) {

        const humanSelection = getHumanChoice();

        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
        console.log("You win!! congratulations!!");
    else
        console.log("You lose!! sorry!!");

    console.log(`Score: You >> ${humanScore}, Computer >> ${computerScore}.`);
}

playGame();