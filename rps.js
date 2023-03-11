const result = document.querySelector(".result");
const pick = document.querySelector(".pick");
const pScore = document.querySelector(".player");
const cScore = document.querySelector(".cpu");

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {       
        playRound(e.target.id, getComputerChoice());
    });
});

let pWins = 0;
let cWins = 0;

function playRound(playerClicked, computerSelection) {
    let playerSelection = getPlayerChoice(playerClicked);    
    if ((playerSelection - 1 == computerSelection) || (playerSelection == 0 && computerSelection == 2)) {        
        pWins++;
        result.textContent = `You Win!`;
        pick.textContent = `Your ${playerClicked} beats ${getCpuChoiceText(computerSelection)}`;
        pScore.textContent = `Player: ${pWins}`;
    } else if (playerSelection == computerSelection) {
        result.textContent = `Tied!`;
        pick.textContent = `You both picked ${playerClicked}`;
    } else {
        cWins++;
        result.textContent = `You Lose!`;
        pick.textContent = `His ${getCpuChoiceText(computerSelection)} beats your ${playerClicked}`;
        cScore.textContent = `CPU: ${cWins}`;
    }

    checkForWinner();
}

function checkForWinner() {
    if (pWins > 4) {
        alert("You Won the Match!");
        resetScore();
    } else if (cWins > 4) {
        alert("You Lost the Match!");
        resetScore();
    }
}

function resetScore() {
    cWins = 0;
    pWins = 0;
    result.textContent = `Take your Pick!`;
    pick.textContent = `First to 5 points wins`;
    pScore.textContent = `Player: ${pWins}`;
    cScore.textContent = `CPU: ${cWins}`;
}

function  getPlayerChoice(ans) {
    switch(ans.toLowerCase()) {
        case "paper":       return 0;
        case "scissors":    return 1;
        case "rock":        return 2;
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getCpuChoiceText(choice) {
    switch(choice) {
        case 0:     return "paper";
        case 1:     return "scissors";
        case 2:     return "rock";
    }
}