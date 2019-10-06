
    var questionsAnswers = [
        {
            question: "blah blah blah question 1",
            guessOption: ["pick 1", "pick 2"],
            correct: "3"
        },
        {
            question: "blah blah blah question 2",
            guessOption: ["pick 1", "pick 2"],
            correct: "2"

        },
        {
            question: "blah blah blah question 3 ",
            guessOption: ["pick 1", "pick 2"],
            correct: "1"
        },
        {
            question: "blah blah blah question 4",
            guessOption: ["pick 1", "pick 2"],
            correctAnswer: "4"
        }
    ];

    // ------------------ VARIABLES ---------------------------------

    var wins = 0;
    var answered = false; 
    var index = 0; 
    var time = 10;

    function timerStart(){
        time--;
        $("#timer").html(time);
            if(time === 0){
                console.log("Sorry, no more time left!")
                clearInterval(timerStart);
                $("#timer").hide();
                //resetRound
        }   else if (time <= 5) {
                $("#timer").html("<h4> You have " + time + " seconds left </h4>");
            } 
    };

    function timerStop(){
        clearInterval(timerStart);
    }

    function hideIntro() {
        $("#intro").hide();
    };

    function displayQuestion(){
        $("#display-question").show();
        $("#display-question").append("<h2>");
        $("h2").addClass("question-text");
    }

    // function displayOptions(){
    //     $("#display-options").show();
    //     $("#display-options").append("<button>");
    //     $("button").addClass("choice-button");
    // }

    function displayQA(){

        correct = questionsAnswers[index].correct;
        var question = questionsAnswers[index].question;

        $("#display-question").html(question);
        for (var i = 0; i < questionsAnswers.length; i++) {
            var answer = questionsAnswers[index].guessOption[i];
            $("#display-options").append("<li class= guess-options id =" + i + ">" + answer + "</li>")
        }
    }

    $("#display-options").on("click", ".guess-options", function (event){
        alert("You clicked me");

        var id = $(this).attr("id");
        if (id === correct){
            alert("you are right!");
            correctAnswer();
            console.log(wins);
            clearInterval(timerStart);
            $("#timer").hide();
        } else {
            $("#display-question").text("wrong!");
            incorrectAnswer();
            clearInterval(timerStart);
            $("#timer").hide();
        }
    })

    // 2. display questions, options, timer

    $("#start-button").click(function () {
        hideIntro();
        displayQA();
        setInterval(timerStart, 1000); 




        

        // if (testButton === true) {
        //     // display congratulations on the DOM 
        //     $("#display-question").hide();
        //     $("#display-options").hide();
        //     timerStop();

        //     $("#game-content").html("Great work! You got the right answer!");

        //     //use this to include extra content, maybe a GIF
        //     $("#game-content").append("<p>text text text text<p>");

        //     wins++

        //     // then replace with new question
        // } else if (testButtonTwo === true) {
        //     $("#display-question").hide();
        //     $("#display-options").hide();

        //     $("#game-content").html("Wrong!");

        //     timerStop();

        //     losses++

        //     // then replace with new question
        // } else if (timer === 10) {
        //     $("#game-content").append("<p>Only a few seconds left!</p>");
        // } else if (timer === 0) {
        //     alert("Time Up!");
        //     timerStop();
            
        //     $("#display-question").hide();
        //     $("#display-options").hide();
        //     losses++

        //     $("#game-content").append("<h2>Out of Time</h2>");
        // }
    });

function correctAnswer(){
    wins++
    $("#display-question").hide();
    $("#display-options").hide();
    // resetRound();
};

function incorrectAnswer(){
    // resetRound();

}


// PSUEDO CODE 

//1. user arrives at screen with instructions on how to run application and start button
//2. user clicks start button
    //2.5. clears the initial screen 
    // one question
    // four guess options, 
    // one submit button.
    // one timer
//3. timer starts
    // user has 15 seconds to guess

//4. if user guesses correctly
    // stop the clock
    // clear screen to congratulations page 
    // 5 seconds wait, then next question
    // tally one win

//5. if user guesses incorrectly
    // stop the clock
    // clear screen to provide correct answer
    // 5 seconds wait, then next question

//6. if user takes too long to guess
    // stop the clock
    // say took too long to guess
    // 5 seconds, next question

//7. On final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)