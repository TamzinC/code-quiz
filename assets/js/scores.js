// Need to use localStorage function to save score and initials of users

var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');
var highscoresEl = document.querySelector('#highscores');


//creating an event listener for the submit button
submit.addEventListener('click', function () {
    //Saving the scores as an object of the score and initials element
    var highscores = {
        score: time,
        initials: initials.value
    }
    console.log(highscores);
    //saving the score and initials
    localStorage.setItem('score', JSON.stringify(highscores));
    
    
    //this needs to be displayed upon load of highscores html page - separate event listener for this page?
    var scoreboard = document.createElement('li');
    var userValues = JSON.parse(localStorage.getItem('score'));
    console.log(userValues.score, userValues.initials)
    // scoreboard.innerText = JSON.parse(localStorage.getItem(['score'], ['initials']));
    scoreboard.innerText = userValues.score + " " + userValues.initials;
    document.querySelector('#end-screen').append(scoreboard);
});
    