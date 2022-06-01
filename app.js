const scoreCompElement = document.getElementById('score1');
let scoreComp = Number(document.getElementById('score1').textContent);
const scoreUserElement = document.getElementById('score2');
let scoreUser = Number(document.getElementById('score2').textContent);

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const compChoiceButton = document.getElementById('compChoice');

const upDateScore = function (e) {
    if ((e.originalTarget.innerHTML === '🪨 Rock' && compChoiceButton.textContent === '✂️ Scissors') || (e.originalTarget.innerHTML === '📃 Paper' && compChoiceButton.textContent === '🪨 Rock') || (e.originalTarget.innerHTML === '✂️ Scissors' && compChoiceButton.textContent === '📃 Paper')) {
        scoreUser++;
        scoreUserElement.textContent = scoreUser;
    } else if (e.originalTarget.innerHTML === compChoiceButton.textContent) {
        return;
    } else {
        scoreComp++;
        scoreCompElement.textContent = scoreComp;
    }
}

const findComputerChoice = function () {
    const random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    if (random === 1) {
        compChoiceButton.textContent = '🪨 Rock';
    } else if (random === 2) {
        compChoiceButton.textContent = '📃 Paper';
    } else {
        compChoiceButton.textContent = '✂️ Scissors';
    }
    compChoiceButton.classList.remove('hidden');
}

rockButton.addEventListener('click', findComputerChoice);
rockButton.addEventListener('click', upDateScore);
paperButton.addEventListener('click', findComputerChoice);
paperButton.addEventListener('click', upDateScore);
scissorsButton.addEventListener('click', findComputerChoice);
scissorsButton.addEventListener('click', upDateScore);