//Trivia form with multiple choice or true/false questions - done!
//Player has to finish the quiz in a limited amount of time - timer code included, not sure how to link to modal?
    //game ends when time runs out
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
// WANT MODAL TO LOAD BEFORE THE CLOCK COUNTER STARTS 
// link to modal information https://getbootstrap.com/docs/4.1/components/modal/
//create modal with "start button" and then at the end of the game the modal will appear again with game score and the start button.
//add functionality for ".button-finish" - show modal with questions correct/wrong/unanswered/start button?

//THIS IS THE FUNCTION NEEDED TO CHANGE THE CONTENT IN THE MODAL FOR START VERSUS FINISH
    // $('#myModal').on('show.bs.modal', function (event) {
    //     var button = $(event.relatedTarget) // Button that triggered the modal
    //     var recipient = button.data('whatever') // Extract info from data-* attributes
    //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //     var modal = $(this)
    //     modal.find('.modal-title').text('New message to ' + recipient)
    //     modal.find('.modal-body input').val(recipient)
    // });
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    //tracks the correct box clicks
    $('input[name=correctCheckbox]').change(function(){ //need to add a function that will calculate the totals for the modal popup
        if($(this).is(':checked')) {
            correctAnswer++;
            console.log("I'm right"); //working
        } 
    });
    //tracks the incorrect box clicks
    $('input[name=incorrectCheckbox]').change(function(){ //need to add a function that will calculate the totals for the modal popup
        if($(this).is(':checked')) {
            incorrectAnswer++;
            console.log("I'm wrong"); //working
        } 
    });

    //These functions are for each of the checkboxes to ensure only one is checked per group
    $(".form-check-input1").on("change", function() {
        if($('.form-check-input1:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input2").on("change", function() {
        if($('.form-check-input2:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input3").on("change", function() {
        if($('.form-check-input3:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input4").on("change", function() {
        if($('.form-check-input4:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input5").on("change", function() {
        if($('.form-check-input5:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input6").on("change", function() {
        if($('.form-check-input6:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input7").on("change", function() {
        if($('.form-check-input7:checked').length > 1) {
                this.checked = false;
            }
    });

    $(".form-check-input8").on("change", function() {
        if($('.form-check-input8:checked').length > 1) {
                this.checked = false;
            }
    });


    //function startGame() { //struggling with the reset function
        //document.getElementById("form-group").reset(); //clear the forms

    //}

    //startGame();
    


    //link the correct answer totals to the modal "correctAnswerNum" 

    $(window).on("load", function() { // allows the modal to load before the counter starts
        $('#myModal').modal('show'); //working
        
    });

    $(".button-finish").click(stopwatch.stop);
    $(".button-start").click(stopwatch.start);

        //code for stopwatch, still need to sort out how to stop it at a minute
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
        },

        increment: function() { //to hopefully stop the stopwatch at a minute and then reset to zero
            if ((".button-finish").on("click", stop)) {
                stop();
                reset();
            }
             elseif (minutes === 1 && seconds === 00); {
                stop();
                reset();
             }
            }

    }; 
    
    
         
});