function computerPlay(){
    let number =  Math.floor(Math.random() * 3);
    if (number === 0) {
        return computerSelection = "Rock";
    } else if (number === 1) {
        return computerSelection = "Paper";
    } else {
        return computerSelection = "Scissors";
    }
   };

   function playRound(playerSelection, computerSelection) {
       playerSelection = playerSelection.toUpperCase();
       computerSelection = computerSelection.toUpperCase();
       let resultText = document.querySelector('#results');

    if (playerSelection === computerSelection && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays the same. Round tied!";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Paper. You lost the round!";
        computerWins.textContent = +computerWins.textContent + 1;
        if (computerWins.textContent >= 5) {
            resultText.textContent = "Computer plays Paper. You have lost the game!";
        }
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Scissors. You won the round!";
        yourWins.textContent = +yourWins.textContent + 1;
        if (yourWins.textContent >= 5) {
            resultText.textContent = "Computer plays Scissors. You have won the game!";
        }
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Rock. You won the round!";
        yourWins.textContent = +yourWins.textContent + 1;
        if (yourWins.textContent >= 5) {
            resultText.textContent = "Computer plays Rock. You have won the game!"
        }
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Scissors. You lost the round!";
        computerWins.textContent = +computerWins.textContent + 1;
        if (computerWins.textContent >= 5) {
            resultText.textContent = "Computer plays Scissors. You have lost the game!"
        }
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Rock! You lost the round!";
        computerWins.textContent = +computerWins.textContent + 1;
        if (computerWins.textContent >= 5) {
            resultText.textContent = "Computer plays Rock. You have lost the game!"
        }
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER" && yourWins.textContent < 5 && computerWins.textContent < 5) {
        resultText.textContent = "Computer plays Paper. You won the round!";
        yourWins.textContent = +yourWins.textContent + 1;
        if (yourWins.textContent >= 5) {
            resultText.textContent = "Computer plays Paper. You have won the game!"
        }
    } else {
        gameOver.textContent = "Game over. Click Reset to play again.";
    }
   };

   const theResetButton = document.getElementById("resetButton");

   const buttons = document.querySelectorAll('.button');

   buttons.forEach(button => {
       button.addEventListener('click', event => {
           computerPlay();
           playRound(event.target.textContent, computerSelection);
       })
   });
   
    theResetButton.addEventListener('click', () => {
        let resultReadOut = document.getElementById("results");
        yourWins.textContent = 0;
        computerWins.textContent = 0;
        resultReadOut.textContent = "";
        gameOver.textContent = "";
    });
    
    const allButtons = document.querySelectorAll('button');
    
    allButtons.forEach(button => {
        button.style.backgroundColor = 'white';
        button.style.borderRadius = '2px';
        button.style.height = '40px';
        button.style.fontSize = '19px'
        button.addEventListener('mouseenter', event => {
            event.target.style.backgroundColor = 'black';
            event.target.style.color = 'white';
        });
        button.addEventListener('mouseleave', event => {
            event.target.style.backgroundColor = 'white';
            event.target.style.color = 'black';
        });
        
    })