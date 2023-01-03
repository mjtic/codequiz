// need to declare variables

// #headboard
var headBoard = document.getElementById("headboard");
// #start page wrapper
var startWrapper = document.getElementById("start-wrapper");
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



// #start button
var startBtn = document.getElementById("startBtn");
// add eventListener to startGame function by clciking startBtn
startBtn.addEventListener("click", startGame)

// timer variables
var countDown = document.getElementsByClassName("countdown"); // .countdown
var timeLeft = 80; //availble time start
var timeStart = 0; //time start
// time textContent
countdown.textContent = "Time: " + timeStart + "s";

//timer function upon click startBtn
function startTimer(){
    let quizTime = setInterval(function(){
        if (timeLeft > 0){
            timeLeft = timeLeft -1;
        }
    })
}



// Pages : https://www.w3schools.com/jsref/prop_style_display.asp
startWrapper.style.display = "block";
// quizPage.style.display = 'none';
// finalPage.style.display = 'none';




// need array of questions
var questions = [];

//need to define variables - WIP
//need array of questions - waiting to recieve info from class
//need page display to still and change - worked on start page, quiz and result page WIP
//need timer function, intervals - WIP
//need prevent default,
//need addEvenetLitsener





//pseudo-code:

//user is presented with 5 questions - arrray of objects
    //format for questions???
        //Object that contains {question: stirng, Choices: array, answer: string}
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