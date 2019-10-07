
    var questionsAnswers = [
        {
            question: "blah blah blah question 1",
            guessOption: ["pick 1", "pick 2"],
            correct: "3",
            correctTitle: "Valentina",
            correctInfo: "Blah blah paragraph 1"
        },
        {
            question: "blah blah blah question 2",
            guessOption: ["pick 6", "pick 7"],
            correct: "2",
            correctTitle: "Yuki", 
            correctInfo: "Blah blah paragraph 2"

        },
        {
            question: "blah blah blah question 3 ",
            guessOption: ["pick 30", "pick 35"],
            correct: "1",
            correctTitle: "Delilah",
            correctInfo: "Blah blah paragraph 3"
        },
        {
            question: "blah blah blah question 4",
            guessOption: ["pick 1", "pick 2"],
            correct: "4", 
            correctTitle: "Goober",
            correctInfo: "Blah blah paragraph 4"
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

    //use this function to display the question and answer 

    function displayQA(){
        correct = questionsAnswers[index].correct;
        var question = questionsAnswers[index].question;

        $("#display-question").html(question);

        for (var i = 0; i < questionsAnswers.length; i++) {
            var answer = questionsAnswers[index].guessOption[i];
            $("#display-options").append("<li class= guess-options id =" + i + ">" + answer + "</li>")
        }
    }

    //this function starts the game

    function startGame(){
        $("#display-question").show();
        $("#display-options").show();
        $("#timer").show();
        displayQA();
        setInterval(timerStart, 1000); 
    };

    //this function occurs when user clicks guess options 

    $("#display-options").on("click", ".guess-options", function (event){
        var id = $(this).attr("id");
        if (id === correct){
            alert("you are right!");
            correctAnswer();
            clearInterval(timerStart);
        } else {
            clearInterval(timerStart);
            incorrectAnswer();
        }
    })

    // 2. display questions, options, timer

    $("#start-button").click(function () {
        hideIntro();
        startGame();
    });

function correctAnswer(){
    console.log(index);
    console.log(timer);
    $("#display-question").hide();
    $("#display-options").hide();
    $("#timer").hide();
    
    $("#game-content").append("<div class= correct>").html("<h2>You're right!</h2>");

        for (var i = 0; i < questionsAnswers.length; i++) {
            var correctTitle = questionsAnswers[index].correctTitle;
            var correctInfo = questionsAnswers[index].correctInfo;
        }
    $("#game-content").append("<h4>" + correctTitle + "</h4>");
    $("#game-content").append("<h4>" + correctInfo + "</h4>");

    setTimeout(function(){
        $("#game-content").hide();
        startGame();

    }, 3000);

    index++
    wins++
    
    // resetGame();
};

function incorrectAnswer(){
    resetGame();
    console.log(index);
    index++
}

function resetGame(){
    $("#display-question").show();
    $("#display-options").show();
    if(index < questionsAnswers.length){
        setTimeout(function (){
            displayQA();

        }, 1000)
    }
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