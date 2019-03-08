let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div     = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function randomGen() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function convertToSelector(letter) {
    if(letter === 'r') return "rock";
    if(letter === 'p') return "paper";
    return "scissors";
}


function win(user, comp) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(comp) +". You win!";
    document.getElementById(convertToSelector(user)).classList.add('green-glow-elem');
    setTimeout(function() {
    document.getElementById(convertToSelector(user)).classList.remove('green-glow-elem');}, 500);
    document.getElementById('header1').classList.add('green-glow-back');
    setTimeout(function() {
    document.getElementById('header1').classList.remove('green-glow-back');}, 500);
}

function lose(user, comp) {
    compScore ++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertToWord(user) + " lost to " + convertToWord(comp) +". You lose!";
    document.getElementById(convertToSelector(user)).classList.add('red-glow-elem');
    setTimeout(function() {
    document.getElementById(convertToSelector(user)).classList.remove('red-glow-elem');}, 500);
    document.getElementById('header1').classList.add('red-glow-back');
    setTimeout(function() {
    document.getElementById('header1').classList.remove('red-glow-back');}, 500);

}

function draw(user, comp) {
    result_div.innerHTML = "It was a draw.";
    document.getElementById(convertToSelector(user)).classList.add('grey-glow-elem');
    setTimeout(function() {
    document.getElementById(convertToSelector(user)).classList.remove('grey-glow-elem');}, 500);
    document.getElementById('header1').classList.add('grey-glow-back');
    setTimeout(function() {
    document.getElementById('header1').classList.remove('grey-glow-back');}, 500);

}


function game(userChoice) {
    const compChoice = randomGen();
    switch(userChoice + compChoice) {
        case "rs" :
        case "pr" :
        case "sp" :
            win(userChoice, compChoice);
            break;

        case "rp" :
        case "ps" :
        case "sr" :
            lose(userChoice, compChoice);
            break;

        case "rr" :
        case "pp" :
        case "ss" :
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r") );
    paper_div.addEventListener('click', () => game("p") );
    scissors_div.addEventListener('click', () => game("s") );
}

main();
