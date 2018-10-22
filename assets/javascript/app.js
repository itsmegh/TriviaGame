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
    var options = [
        {
            question: "A roux is used to thicken soups or sauces. What is it usually made from?",
            choice: ["Egg and Flour", "Butter and Flour", "Water and Flour"],
            answer: 1
        },
        {
            question: "Pupusas are a handmade, thick stuffed corn tortilla traditionally made in what country?",
            choice: ["Ethiopia", "Peru", "El Salvadore"],
            answer: 2
        },
        {
            question: "To zest a citrus fruit is to:",
            choice: ["Grate or scrape off part of the rind", "Squeeze juice from the pulp", "Cut the fruit into small pieces"],
            answer: 0
        },
        {
            question: "When droplets of oil and vinegar are mixed together so they are no longer separate, they have been...?",
            choice: ["Clarified", "Extracted", "Emulsified"],
            answer: 2
        },
        {
            question: "Roughly how many tablespoons are in 1 cup?",
            choice: ["8", "12", "16"],
            answer: 2
        },
        {
            question: "Saint Andre, Burrata, Emmentaler and Halloumi are types of..?",
            choice: ["Wine", "Cheese", "Chocolate"],
            answer: 1
        },
        {
            question: "What does au jus mean?",
            choice: ["Served with the natual cooking juices", "Cooked in wine", "Cooked with citrus or other fruit juices"],
            answer: 0
        },
        {
            question: "How many items are in a Baker's Dozen?",
            choice: ["12", "13", "14"],
            answer: 1
        },
        {
            question: "Which fruit contains the most protein per 100 calories?",
            choice: ["Guava", "Avocado", "Banana"],
            answer: 0
        },
        {
            question: "What is the most widely eaten fish in the world?",
            choice: ["Tilapia", "Cod", "Herring"],
            answer: 2
        },
    ];
        
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var userGuess = "";
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();
    //click start button to start the game
    $("#start").on("click", function() {
        $("#start").hide();
        displayQuestion();
        runTimer();
        
        for(var i=0; i<options.length; i++) {
            holder.push(options[i]);
        };
        
    });


    // $(".button-start").on("click", function() {
    //     $(".button-start").hide();
    //     displayQuestion();
    //     stopwatch.start();
 

    var intervalID;
    var clockRunning = false;
    var stopwatch = {
        time: 20,

        reset: function() {
            stopwatch.time;
            clockRunning = false;
            $("#start").click(stopwatch.start);

        },

        start: function() {
            console.log("clock starting")
            if(!clockRunning) {
                intervalID = setInterval(stopwatch.count, 1000); //changed stopwatch.count to decrement
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

            if(currentTime === "00:00") {
                console.log("time is up");
                incorrectAnswer++;
                stopwatch.stop();
                $("#answerBlock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            }
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


    // $(window).on("load", function() { // allows the modal to load before the counter starts
    //     $('#myModal1').modal('show'); //working
    //     $(".button-start").click(stopwatch.start); { //working
    //         $(".display").text(stopwatch.count); //working
    //         displayQuestion();
    //         for(var i=0; i<options.length; i++)
    //         holder.push(options[i]);
    //     };


    // });

    function displayQuestion() {
        console.log("display question is working");
        index = Math.floor(Math.random()*options.length);
        pick = options[index];

        $("#questionBlock").html("<h2>" + pick.question + "</h2>");
        for(var i=0; i<pick.choice.length; i++) {
            //iterate through answer array and display
            
            var userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.html(pick.choice[i]);
            //asign array position to check answer
            userChoice.attr("data-guessvalue", i);
            $("#answerBlock").append(userChoice);
        }
    };

    //click function to select answer and outcomes
    $(".answerChoice").on("click", function() {
        console.log("answer choice click");
        //grab array position from the user guess
        userGuess = parseInt($(this).attr("data-guessvalue"));

        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stopwatch.stop();
            correctAnswer++;
            userGuess="";
            $("#answerBlock").html("<p>Correct!</p>");

        } else {
            stopwatch.stop();
            incorrectAnswer++;
            userGuess="";
            $("#answerBlock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
        }
    });

    var timeout = setTimeout(function() {
        $("#answerBlock").empty();
        timer=20;
    
    
        if (incorrectAnswer + correctAnswer === qCount) {
            $("#questionBlock").empty();
            $("#questionBlock").html("<h3>Game Over! Here's your score </h3>");
            $("#answerBlock").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answerBlock").append("<h4> Incorrect: " + incorrectAnswer + "</h4>");
            $("#reset").show();
            correctAnswer = 0;
            incorrectAnswer = 0;
        } else {
            stopwatch.start();
            displayQuestion();
        }
    
    });

   $("#reset").on("click", function() {
       $("#reset").hide();
       $("#answerBlock").empty();
       $("#questionBlock").empty();
       for(var i=0; i<holder.length; i++) {
           options.push(holder[i]);
       }
       stopwatch.start();
       displayQuestion();
   });
        

});
    // function scoreCounter() {
    //     //tracks the correct box clicks
    //     $('input[value=1]').change(function(){ 
    //         if($(this).is(':checked')) {
    //             correctAnswer++;
    //             $(".correctAnswerNum").text(correctAnswer);

    //             console.log("I'm right"); //working
    //         } 
    //     });

    //     //tracks the incorrect box clicks
    //     $('input[value=0]').change(function(){ 
    //         if($(this).is(':checked')) {
    //             incorrectAnswer++;
    //             $(".incorrectAnswerNum").text(incorrectAnswer);

    //             console.log("I'm wrong"); //working
    //         } 
    //     });

    // };

    
    

    // function checkGameFinish() {
    //     if ($(".button-finish").click(stopwatch.stop)) {
    //         console.log("finish button works");
    //         scoreCounter();
            

    //     } else if (minutes === 00 && seconds === 00); {
    //         console.log("time ran out");
    //         scoreCounter();
    //     };

    // };
    

    // async function gameOver() {
    //         var x = await checkGameFinish();
    //         console.log("game over");
    //         console.log(x);
    //         $('#myModal2').modal('show');
    //         stopwatch.reset();
    //     };

    // function resetButtonForm() {
    //     $("#myForm").reset();