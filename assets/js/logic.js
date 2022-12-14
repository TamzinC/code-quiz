var start = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var timer = document.querySelector('#time');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');


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
                    timer.textContent = time -= 10;
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
        quizEnd();
    }
};


//this function will run as soon as all questions have been completed, to display the end screen
function quizEnd () {
    questionsScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    feedback.classList.add('hide');
    finalScore.innerText = time;
 }



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



//adding an event listener for the submit button
submit.addEventListener('click', function () {
    //Saving the scores as an object of the score and initials element
    var scoreboard = JSON.parse(localStorage.getItem('score'));

    if(Array.isArray(scoreboard)) {
        console.log('found existing scoreboard!');
    } else {
        scoreboard = [];
    }
    
    var highscores = {
        score: time,
        initials: initials.value
    };
    console.log(highscores);
    scoreboard.push(highscores); 
    //saving the score and initials
    localStorage.setItem('score', JSON.stringify(scoreboard));
    window.location.href = 'highscores.html'; 
});

