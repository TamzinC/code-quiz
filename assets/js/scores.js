
var highscoresEl = document.querySelector('#highscores');
var clearScores = document.querySelector('#clear');


//variable declared to create a new li element to display the users scores and initials
var scoreboard = document.createElement('li');
var userValues = JSON.parse(localStorage.getItem('score'));

function generateLis() {
    for (let i = 0; i < userValues.length; i++) {

        //retrieving user score and initials to localStorage
        console.log(userValues.score, userValues.initials)
        
        //adding the retrieved values as text to the li and appending to the ol element
        scoreboard.innerText = userValues.score + " " + userValues.initials;
        highscoresEl.append(scoreboard);
    };
}


//adding event listener to trigger the scoreboard to be cleared from screen and localStorage
clearScores.addEventListener('click', function() {
    localStorage.removeItem('score');
    highscoresEl.removeChild(scoreboard);
})