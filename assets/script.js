// declare variables

// #headboard
var headBoard = document.getElementById('headboard')


// need id = quiz
// need id = multiple-choice
// need id = choice-1
// need id = choice-2
// need id = choice-3
// need id = choice-4
// need id = endMessage
// need id = finalScore
// need id = result
// need it = score list? or score board?

// array of questions


//

// Pages : https://www.w3schools.com/jsref/prop_style_display.asp
startPage.style.display = 'block';
quizPage.style.display = 'none';
finalPage.style.display = 'none';

// timer variables
var timeLeft = 80; //availble time start
var startScore = 0; //scorekeeping start
var countDown = document.getElementsByClassName('countdown') // .countdown

countDown.textContent = 'Time: ' + startScore + 's';

// gameStart



// startBtn variable
var startBtn = document.getElementById('startBtn')

// eventListener to start the game
startBtn.addEventListener('click', startGame);

// quiz timer count-down
var time = 80;
var countDown = document.getElementById('countDown');

countDown.textContent = 'Time: ' + 's';

function countDown() {
    var Time = 80;
}








