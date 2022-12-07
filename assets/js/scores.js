// Need to use localStorage function to save score and initials of users

var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');


var highscores = {
    score: document.getElementById('#final-score'),
    initials: document.getElementById('#initials')
}





submit.addEventListener('click', function () {
    //saving the score and initials
    localStorage.setItem(['score', JSON.stringify(finalScore)], ['initials', JSON.stringify(initials)]);
    
    //this needs to be displayed upon load of highscores html page - separate event listener for this page?
    var scoreboard = document.createElement('li');
    scoreboard.innerText = JSON.parse(localStorage.getItem(['score'], ['initials']));
})