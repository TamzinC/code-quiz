var start = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var timer = document.querySelector('#time');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');


var intervalHandle;
var currentQuestionIndex = 0;
var time = 60;
var timerId;


//this function will run when 'start quiz' button is clicked
function displayQuestion() {
    //this is checking for the questions array, once the end is reached it will trigger the end screen to display
    if (currentQuestionIndex === 5) {

        console.log("end screen")
        questionsScreen.classList.add('hide');
        endScreen.classList.remove('hide');
        return
    }
    console.log(currentQuestionIndex, "Index")

    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);

    //adding the question title to the question title element
    questionTitle.innerText = currentQuestion.title;

    choices.innerHTML = '';

    //running a forEach loop which will add each choice as a button for each question
    currentQuestion.choices.forEach(function (choice) {
        var choicesButton = document.createElement('button');
        console.log(choice);
        choicesButton.innerText = choice;
        choicesButton.addEventListener('click', function () {


            console.log(currentQuestion.answer === choice);

            //if statement used to determine which sound effect should be played upon user selection
            if (currentQuestion.answer === choice) {

                feedback.innerText = 'Correct!';
                function playCorrectAudio() {
                    var correct = new Audio('./assets/sfx/correct.wav');
                    correct.play();
                }
                playCorrectAudio();

            } else {

                feedback.innerText = 'Wrong answer!';
                function playIncorrectAudio() {
                    var incorrect = new Audio('./assets/sfx/incorrect.wav');
                    incorrect.play();
                    timer.textContent = time - 10;
                }
                playIncorrectAudio();
            }

            currentQuestionIndex++;
            displayQuestion();
        })
        choices.append(choicesButton);
    })
}


//this function will also run as soon as 'start quiz' button is clicked
//this will trigger the start of the countdown from 60sec on the questions screen
function clockTick() {
    time--;
    console.log(time)
    timer.textContent = time

    if (time === 0 || currentQuestionIndex === 5) {

        clearInterval(timerId);
    }
};


//this function will run as soon as all questions have been completed, to display the end screen
function quizEnd () {
    questionsScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScore.innerText = time;
    clearInterval(timerId);
 }
  if (currentQuestionIndex === 5) {
       quizEnd()
 };



//adding event listener for 'start quiz' button click
start.addEventListener('click', function () {
    startScreen.classList.add('hide');
    endScreen.classList.add('hide')
    questionsScreen.classList.remove('hide');
    feedback.classList.remove('hide');
    displayQuestion();
    timerId = setInterval(clockTick, 1000);
    clockTick();

    console.log("timer");
});


// Need to add event listener for start button
// hide class needs to be used to clear page and move onto next question
// all choices need to be buttons!
// answer selection needs to trigger the feedback div and play 'right'/'wrong' sound
// same process for all questions!
// timer starts at 60s, needs to be triggered upon clicking the start button
// every wrong answer = -10s
// quiz ends once all questions answered within time or if timer gets to 0 (score is the remaining time left)
// user is prompted to enter initials at end to submit their scores
// scores data needs to be stored using localStorage to be able to use in the highscore leaderboard