// need to declare variables

// #headboard
var headBoard = document.getElementById("headboard");
// #start page wrapper
var startWrapper = document.getElementById("start-wrapper");
// need id = quiz
var quiz = document.getElementById("quiz-container");
// need id = questions
var questionsEl = document.getElementById("questions");
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
var scoreresult = document.getElementById("scoreResult");
// need id = endMessage
// need id = finalScore
// need id = result
// need id = score list? or score board?

//start page
// Pages : https://www.w3schools.com/jsref/prop_style_display.asp
startWrapper.style.display = "block";
quiz.style.display = "none";
// finalPage.style.display = 'none';

// #start button
var startBtn = document.getElementById("startBtn");
// add eventListener to startGame function by clciking startBtn
startBtn.addEventListener("click", startGame);

// timer variables
var timer = document.getElementById("countdown"); // #countdown
var timeLeft = 80; //availble time start
var timeStart = 0; //time start
// time textContent
timer.textContent = "Time: " + timeStart + "s";

//timer function upon click startBtn
function startTimer() {
  let quizTime = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft = timeLeft - 1;
      timer.textContent = "Time: " + timeLeft + "s";
    } else {
      clearInterval(quizTime);
    }
  }, 1000);
}

//startGame Function
function startGame(event) {
  event.preventDefault();
  startTimer();
  generateQuestions();
}

// Pages : https://www.w3schools.com/jsref/prop_style_display.asp
function generateQuestions() {
  startWrapper.style.display = "none";
  quiz.style.display = "block";
  displayQuestions();
  // finalPage.style.display = 'none';
}

var count = 0;
var totalCorrect = 0;

function displayQuestions() {
  if (count < questions.length) {
    questionsEl.textContent = questions[count].question;
    choice1.textContent = questions[count].choice1;
    choice2.textContent = questions[count].choice2;
    choice3.textContent = questions[count].choice3;
    choice4.textContent = questions[count].choice4;
  } else if (count == questions.length) {
    displayResult();
  }
}
function displayResult() {
  startWrapper.style.display = "none";
  quiz.style.display = "none";
  scoreresult.style.display = "block";
  var result = document.getElementById("result");
  result.textContent = "Your final socre is " + totalCorrect;
}

function goToNextQuestion() {
  count++;
  displayQuestions();
}
function check(event) {
  console.log(event);
  var choiceCheckEl = document.getElementById("choiceCheck");
  if (event == questions[count].correct) {
    console.log("correct");
    choiceCheckEl.textContent = "correct";
    totalCorrect++;
  } else {
    console.log("incorrect");
    choiceCheckEl.textContent = "incorrect";
    timeLeft -= 15;
  }
  goToNextQuestion();
}

var scoreResult = document.getElementById("scoreResult");

function resultDisplay() {
  startWrapper.style.display = "none";
  quiz.style.display = "none";
  scoreResult.style.display = "block";
}

function submitscore() {
  let initial = document.getElementById("initial").value;

  var newScore = {
    result: totalCorrect,
    initial: initial,
  };
  finalscores.push(newScore);
  window.localStorage.setItem("finalscores", JSON.stringify(finalscores));
  console.log(newScore);
}

var finalscores = JSON.parse(window.localStorage.getItem("fianlscores")) || [];
//local storage capture total score
// finalScore.addEventListener("click", function(event){
//     event.preventDefault();

//     var highScoreInfo = document.getElementById()

// })

// resultDisplay();

// function displayResult() {

//     startWrapper.style.display = "none";
//     quiz.style.display = "none";

//     var result = document.getElementById("result");
//     result.textContent = "Result: " + totalCorrect +
// }

// need array of questions
//user is presented with 5 questions - arrray of objects
//format for questions???
//Object that contains {question: stirng, Choices: array, answer: string} - didn't follow exactly
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?:",
    choice1: "1.: JS",
    choice2: "2.: javascript",
    choice3: "3.: scripting",
    choice4: "4.: script",
    correct: "4",
  },
  {
    question: "Where is the correct place to insert a JavaScript?:",
    choice1: "1.: <head> section",
    choice2: "2.: <header>section",
    choice3: "3.: <footer>section",
    choice4: "4.: <body>section",
    correct: "4",
  },
  {
    question: "How do you call a function named myFunction?:",
    choice1: "1.: call myFunction",
    choice2: "2.: call function=myFunction",
    choice3: "3.: call myfunction=()",
    choice4: "4.: myFunction()",
    correct: "4",
  },
  {
    question: "How does a FOR loop start?:",
    choice1: "1.: for i = 1 to 5",
    choice2: "2.: for loop ()",
    choice3: "3.: for (i = 0; i <= 5)",
    choice4: "4.: for (i = 0; i <= 5; i++ )",
    correct: "4",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?:",
    choice1: "1.: onmouse",
    choice2: "2.: onmouseover",
    choice3: "3.: onchange",
    choice4: "4.: onclick",
    correct: "4",
  },
];

//need to define variables - WIP
//need array of questions - waiting to recieve info from class
//need page display to still and change - worked on start page, quiz and result page WIP
//need timer function, intervals - WIP
//need prevent default,
//need addEvenetLitsener

//pseudo-code:

//user is presented with 5 questions - arrray of objects = done
//format for questions???
//Object that contains {question: stirng, Choices: array, answer: string} = done but in diffrent format
//Display questions - loop one by one
//Append questions
//Append choices array

// user selects an answer (button, radio, checkboxes) data-answer = ""
//click event is on the parent container (quiz or question wrapper)
//how to know which element was clicked(event.target)
//if the answer is correct display next question access array of questions object
//if answer is incorrect add 15 seconds to socre and display next question

//when all questions are answered display form to submit initial
//save form values socre and initials to loca storage

//change to higihscore html
//read values form local storage
//append score values to page

//might need to use keyword this alot
