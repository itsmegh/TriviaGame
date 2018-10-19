//Trivia form with multiple choice or true/false questions - done!
//Player has to finish the quiz in a limited amount of time - timer code included, not sure how to link to modal?
    //game ends when time runs out - done!
    //end of game page shows number of questions the player got correct and incorrect
//Game Play
    //Player can only pick one answer per question - done!
    //show a countdown timer - done! (want the timer to move with page?)
    //identify answers chosen - and count in the background correct versus incorrect - was working?

//Game start and finish
    //need to add a cover page that hides the questions - start button - modal added, not functioning yet
    // finished button at the bottom of the questions to stop the game clock - button added, not functioning
    //show cover page again, but this time with correct, incorrect and unanswered questions - modal added
        //show win or loss based on corrected answers (8 total questions)
        //button option to restart the game - button in modal


$(document).ready(function() {
//create modal with "start button" and then at the end of the game the modal will appear again with game score and the start button.
//add functionality for ".button-finish" - show modal with questions correct/wrong/unanswered/start button

    
    var correctAnswer = 0;
    var incorrectAnswer = 0;

    var intervalID;
    var clockRunning = false;
    var stopwatch = {
        time: 30,

        reset: function() {
            stopwatch.time = 0;

            $(".display").text("00:00");
        },

        start: function() {
            console.log("clock starting")
            if(!clockRunning) {
                intervalID = setInterval(stopwatch.count, 1000);
                clockRunning = true;
                stopwatch.count();
            }
        },

        stop: function() {
            clearInterval(intervalID);
            clockRunning = false;
        },

        count: function() {
            console.log("counting");
            stopwatch.time--;
            var currentTime = stopwatch.timeConverter(stopwatch.time);
            $(".display").text(currentTime);
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
        },

    };


    $(window).on("load", function() { // allows the modal to load before the counter starts
        $('#myModal1').modal('show'); //working
        $(".button-start").click(stopwatch.start); { //working
            $(".display").text(stopwatch.count); //working
        };

        checkGameFinish();
        
    });

    function scoreCounter() {
        //tracks the correct box clicks
        $('input[value=1]').change(function(){ //need to add a function that will calculate the totals for the modal popup
            if($(this).is(':checked')) {
                correctAnswer++;
                $(".correctAnswerNum").text(correctAnswer);

                console.log("I'm right"); //working
            } 
        });

        //tracks the incorrect box clicks
        $('input[value=0]').change(function(){ //need to add a function that will calculate the totals for the modal popup
            if($(this).is(':checked')) {
                incorrectAnswer++;
                $(".incorrectAnswerNum").text(incorrectAnswer);

                console.log("I'm wrong"); //working
            } 
        });

    };


    function checkGameFinish() {
        if ($(".button-finish").click(stopwatch.stop)) {
            console.log("finish button works");
            scoreCounter();
            

        } else if (minutes === 00 && seconds === 00); {
            console.log("time ran out");
            scoreCounter();
        };
    }
    

    function gameOver() {
        if (checkGameFinish()) {
            console.log("game over");
            $('#myModal2').modal('show');
            stopwatch.reset();
        }

    };
         
});