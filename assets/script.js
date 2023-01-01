// need to declare variables

// #headboard
var headBoard = document.getElementById("headboard");
// #start page wrapper
var startWrapper = document.getElementById("start-wrapper");
// #start button
var startBtn = document.getElementById("startBtn");
// need id = quiz
var quiz = document.getElementById("quiz-container");
// need id = questions
var questions = document.getElementById("questions");
// need id = multiple-choice
var choice = document.getElementById("multiple-choices");
// need id = choice-1
var choice1 = document.getElementById("choice-1");
// need id = choice-2
var choice2 = document.getElementById("choice-2");
// need id = choice-3
var choice3 = document.getElementById("choice-3");
// need id = choice-4
var choice4 = document.getElementById("choice-4");

// need id = endMessage
// need id = finalScore
// need id = result
// need id = score list? or score board?

// need array of questions
var questions = [];

// Pages : https://www.w3schools.com/jsref/prop_style_display.asp
startWrapper.style.display = "block";
// quizPage.style.display = 'none';
// finalPage.style.display = 'none';

// timer variables
var countDown = document.getElementsByClassName("countdown"); // .countdown
var timeLeft = 80; //availble time start
var timeStart = 0; //time start

// time textContent
countdown.textContent = "Time: " + timeStart + "s";

//need to define variables - WIP
//need array of questions - waiting to recieve info from class
//need page display to still and change - worked on start page, quiz and result page WIP
//need timer function, intervals - WIP
//need prevent default,
//need addEvenetLitsener
