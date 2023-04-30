let userScore = 0;
let computerScore = 0;
let round = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const user_choice_div = document.getElementById("user-choice");
const computer_choice_div = document.getElementById("computer-choice");
const round_div = document.querySelector(".round");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors")
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissors_img = document.getElementById("s");
const finalResult_p = document.getElementById("action-massage");

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    if (choices[randomNumber] === "rock") {
        const existingImage = computer_choice_div.querySelector('img');
        if (existingImage) {
            computer_choice_div.removeChild(existingImage);
        }
        
        const clonePaper = rock_img.cloneNode(true)
        computer_choice_div.appendChild(clonePaper);
    }
    else if(choices[randomNumber] === "paper"){
        const existingImage = computer_choice_div.querySelector('img');
        if (existingImage) {
            computer_choice_div.removeChild(existingImage);
        }
        
        const clonePaper = paper_img.cloneNode(true)
        computer_choice_div.appendChild(clonePaper);
    }
    else if(choices[randomNumber] === "scissors"){
        const existingImage = computer_choice_div.querySelector('img');
        if (existingImage) {
            computer_choice_div.removeChild(existingImage);
        }
        
        const clonePaper = scissors_img.cloneNode(true)
        computer_choice_div.appendChild(clonePaper);
    }

    
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice} point to YOU!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice} point to computer`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "ITS A DRAW!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors": 
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice)
            break;
        
    }
    round++
    round_div.innerHTML = "Round: " + round;

    if (userScore == 5 || computerScore == 5) {
        // Stop game
        if (userScore > computerScore) {
            finalResult_p.innerHTML = "YOU WIN!";
            confetti({
                particleCount: 150
              });
            playAgain();
        }
        else if (computerScore > userScore) {
            finalResult_p.innerHTML = "YOU LOSE.";
            playAgain();
        }
    }
}


function playAgain() {
    setTimeout(() => {
      const playAgain = confirm("Do you want to play again?");
      if (playAgain) {
        resetGame();
      }
      else{
        window.close();
      }
    }, 1000);
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 0;
    userScore_span.innerHTML = "0";
    computerScore_span.innerHTML = "0";
    round_div.innerHTML = "Rounds";
    const existingCompImage = computer_choice_div.querySelector('img');
    const existingImage = user_choice_div.querySelector('img');
    computer_choice_div.removeChild(existingCompImage);
    user_choice_div.removeChild(existingImage);
    result_p.innerHTML = null;
    finalResult_p.innerText = "Make your move";
}

rock_div.addEventListener('click', function(){
    /* console.log("hey you clicked on rock"); */
    game("rock")

    const existingImage = user_choice_div.querySelector('img');
    if (existingImage) {
        user_choice_div.removeChild(existingImage);
    }
    
    const clonedRock = rock_img.cloneNode(true)
    user_choice_div.appendChild(clonedRock);
})

paper_div.addEventListener('click', function(){
    /* console.log("hey you clicked on paper"); */
    game("paper")

    const existingImage = user_choice_div.querySelector('img');
    if (existingImage) {
        user_choice_div.removeChild(existingImage);
    }
    
    const clonePaper = paper_img.cloneNode(true)
    user_choice_div.appendChild(clonePaper);
})

scissors_div.addEventListener('click', function(){
    /* console.log("hey you clicked on scissors"); */
    game("scissors")
    const existingImage = user_choice_div.querySelector('img');
    if (existingImage) {
        user_choice_div.removeChild(existingImage);
    }
    
    const cloneScissors = scissors_img.cloneNode(true)
    user_choice_div.appendChild(cloneScissors);
})