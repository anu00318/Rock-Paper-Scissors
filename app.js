// Rock Paper Scissors Game
//Requirements:
// 3 buttons for each rock, paper, scissors respectively.
// A tag to display left moves
// A tag to display the result
// Two tags for displaying player's score and computer's score
// one button for restart

const playerScore = document.querySelector('#pScore');
const computerScore = document.querySelector('#cScore');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const computerChoice = document.querySelector('#cChoice');
const result = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const movesLeft = document.querySelector('#movesLeft');

const options = [rockBtn, paperBtn, scissorsBtn];
let moves = 0;
let compScore = 0;
let playScore = 0;


const computerOpt = function () {
    return options[Math.floor(Math.random() * 3)];
}



options.forEach(function (option) {
    option.addEventListener('click', () => {
        moves++;
        movesLeft.textContent = `Moves Left: ${10 - moves}`;
        winner(option.textContent, computerOpt().textContent);
        if (moves >= 10) {
            gameOver();
        }
    })
})


const winner = (player, computer) => {
    const choice = computer;
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie';
        computerScore.textContent = `Computer's Score: ${compScore}`;
        playerScore.textContent = `Your Score: ${playScore}`;
        computerChoice.textContent = `Computer's Choice: ${choice}`;

    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        result.textContent = 'You Won';
        playScore++;
        playerScore.textContent = `Your Score: ${playScore}`;
        computerScore.textContent = `Computer's Score: ${compScore}`;
        computerChoice.textContent = `Computer's Choice: ${choice}`;
    }
    else {
        result.textContent = 'You Lose';
        compScore++;
        computerScore.textContent = `Computer's Score: ${compScore}`;
        playerScore.textContent = `Your Score: ${playScore}`;
        computerChoice.textContent = `Computer's Choice: ${choice}`;

    }

}

const gameOver = function () {
    if (compScore > playScore) {
        result.textContent = 'You lost the game';
    }
    else if (compScore < playScore) {
        result.textContent = 'You won the game';
    }
    else {
        result.textContent = 'Its a tie';
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    computerChoice.textContent = '---';
    resetBtn.addEventListener('click', () => {
        result.textContent = 'Result:';
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        moves = 0;
        compScore = 0;
        playScore = 0;
        computerScore.textContent = `Computer's Score: ${0}`;
        playerScore.textContent = `Your Score: ${0}`;
        computerChoice.textContent = "Computer's Choice:"
    })
}
