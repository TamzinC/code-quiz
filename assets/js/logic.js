var start = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');

var intervalHandle
var currentQuestionIndex = 0;

var displayQuestion = function() {
    
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = currentQuestion.title;
    // choices.innerHTML = '';
    
    for (let choiceIndex = 0; choiceIndex < currentQuestion.choices.length; choiceIndex++) {
    
        var choicesButton = document.createElement('button');
        choicesButton.innerText = currentQuestion.choices[choiceIndex];
        choicesButton.addEventListener('click', function () {
            console.log(currentQuestion.answer === currentQuestion.choices[choiceIndex])
        })
        choices.append(choicesButton);

    }
}

var startTime = function () {
    intervalHandle = setInterval(function () {
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