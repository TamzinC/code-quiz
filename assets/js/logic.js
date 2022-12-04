var start = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var timer = document.querySelector('#time');
var endScreen = document.querySelector('#end-screen');

var intervalHandle
var currentQuestionIndex = 0;




function displayQuestion() {
    
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = currentQuestion.title;
    var isCorrect 
    // choices.innerHTML = '';
    
    for (let choiceIndex = 0; choiceIndex < currentQuestion.choices.length; choiceIndex++) {
    
        var choicesButton = document.createElement('button');
        choicesButton.innerText = currentQuestion.choices[choiceIndex];
        choicesButton.addEventListener('click', function () {
            isCorrect = currentQuestion.answer === choiceIndex;

            console.log(currentQuestion.answer === currentQuestion.choices[choiceIndex])
        })
        choices.append(choicesButton);

    }
}



function startTime() {
    var timeLeft = 60;
    intervalHandle = setInterval(function () {
        timeLeft--;
        
        if (timeLeft <= 0) {
            timer.innerText = '';
            clearInterval(intervalHandle);

        }

        console.log('time');
    }, 1000);
}



start.addEventListener('click', function () {
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    displayQuestion();

    console.log("hi");
})


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