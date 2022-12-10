
var highscoresEl = document.querySelector('#highscores');
var clearScores = document.querySelector('#clear');


//variable declared to create a new li element to display the users scores and initials
var scoreboard = document.createElement('li');

function generateLis() {
    for (scoreboard = 0; scoreboard.length; scoreboard++) (

        //retrieving user score and initials to localStorage
        var userValues = JSON.parse(localStorage.getItem('score'));
        console.log(userValues.score, userValues.initials)
        
        //adding the retrieved values as text to the li and appending to the ol element
        scoreboard.innerText = userValues.score + " " + userValues.initials;
        highscoresEl.append(scoreboard);
    );
}


//adding event listener to trigger the scoreboard to be cleared from screen and localStorage
clearScores.addEventListener('click', function() {
    localStorage.removeItem('score');
    highscoresEl.removeChild(scoreboard);
})