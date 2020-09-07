//create computerplay function
function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.round(Math.random() * 3)]
}

//Function for taking in both inputs and seeing who won
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "tie"
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Scissors") {
            return `win`
        }
        else {
            return `lose`
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return `win`
        }
        else {
            return `lose`
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            return `win`
        }
        else {
            return `lose`
        }
    }
    else {
        return "Please enter rock, paper or scissors"
    }
}

//creating the loop for the game
function game(){
    let score = 0;
    let compScore = 0;
    for (let i = 1; i <= 5; i++) {
        let userInput = prompt('Please enter paper, rock, or scissors').toLowerCase();
        let computerChoice = computerPlay();
        if (playRound(userInput, computerChoice) == 'win') {
            score++
            console.log(`${userInput} beats ${computerChoice}| round ${i} | You: ${score} Comp: ${compScore}`)
        }
        else if (playRound(userInput, computerChoice) == 'lose') {
            compScore++
            console.log(`${computerChoice} beats ${userInput}| round ${i} | You: ${score} Comp: ${compScore}`)
        }
        else if (playRound(userInput, computerChoice) == 'tie') { 
            console.log(`You tied| round ${i} | You: ${score} Comp: ${compScore}`)
        }
    } 
  }

game()