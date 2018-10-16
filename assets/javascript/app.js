//Trivia form with multiple choice or true/false questions - done!
//Player has to finish the quiz in a limited amount of time
    //game ends when time runs out
    //end of game page shows number of questions the player got correct and incorrect
//Game Play
    //Player can only pick one answer per question
    //show a countdown timer
    //identify answers chosen - and count in the background correct versus incorrect

//Game start and finish
    //need to add a cover page that hides the questions - start button
    // done button at the bottom of the questions to stop the game clock
    //show cover page again, but this time with correct, incorrect and unanswered questions
        //show win or loss based on corrected answers (8 total questions)
        //button option to restart the game
$(document).ready(function() {
// WANT MODAL TO LOAD BEFORE THE CLOCK COUNTER STARTS - HOW TO?
// link to modal information https://getbootstrap.com/docs/4.1/components/modal/
//create modal with "start button" and then at the end of the game the modal will appear again with game score and the start button.
//add functionality for ".button-finish" - show modal with questions correct/wrong/unanswered/start button?

    window.onload = function() {
        //we don't want an onclick event, we just want it to start when the modal clicks off... how?
    }

    var intervalID;
    var clockRunning = false;
    var stopwatch = {
        time: 0,

        reset: function() {
            stopwatch.time = 0;

            $("#display").text("00:00");
        },

        start: function() {
            if(!clockRunning) {
                intervalID = setInterval(stopwatch.count, 1000);
                clockRunning = true;
            }
        },

        stop: function() {
            clearInterval(intervalID);
            clockRunning = false;
        },

        count: function() {
            stopwatch.time++;
            var currentTime = stopwatch.timeConverter(stopwatch.time);
            $("#display").text(currentTime);
        },

        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if  (minutes === 0) {
                minutes = "00";
            }
            
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
         
    }
});