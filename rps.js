console.log("Welcome to RPS: \n");
//console.log(playRound(getPlayerChoice(), getComputerChoice()));
game();

function game() {
    /*let pWins = 0;
    let cWins = 0;*/
    let winner = 0;
    for(let i = 0; i < 5; i++) {
        winner += playRound(getPlayerChoice(), getComputerChoice());
        
        /*
        if (winner > 0) {
            pWins++;
            console.log("You Win!");
        } else if (winner < 0) {
            cWins++;
            console.log("You Lose!");
        } else {
            console.log("Tied!");
        }*/
    }

    if (winner > 0) {
        console.log("You Win! " + winner);
    } else if (winner < 0) {
        console.log("You Lose! " + winner);
    } else {
        console.log("Tied! " + winner);
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection - 1 == computerSelection) || (playerSelection == 0 && computerSelection == 2)) {
        console.log("ps: " + playerSelection + ", cs: " + computerSelection);
        //return "You Win!";
        return 1;
    } else if (playerSelection == computerSelection) {
        console.log("ps: " + playerSelection + ", cs: " + computerSelection);
        //return "Tied!";
        return 0;

    } else {
        console.log("ps: " + playerSelection + ", cs: " + computerSelection);
        //return "You Lose!";
        return -1;
    }
}

function  getPlayerChoice() {
    let ans = prompt("Rock, Paper, or Scissors?");

    switch(ans.toLowerCase()) {
        case "paper":       return 0;
        case "scissors":    return 1;
        case "rock":        return 2;
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    /*switch(Math.floor(Math.random() * 3)) {
        case 0: return "Paper";
        case 1: return "Scissors";
        case 2: return "Rock";
    }*/
}