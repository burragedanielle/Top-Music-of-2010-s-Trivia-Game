
    var questionsAnswers = [
        {
            question: "how long was bad guy by Billie Eilish #1 on the Billboard charts?",
            guessOption: ["three weeks", "one week", "two weeks", "six weeks"],
            correct: "1",
            correctTitle: "one week!",
            correctInfo: "Billie Eilish earned her first number one single in August 2019, after a record-breaking nine-week wait in the runner up spot."
        },
        {
            question: "Which rapper with nearly 17,000,000 monthly listeners on Spotify released a new album in late 2019, titled KIRK?",
            guessOption: ["2 Chainz", "Pusha T", "Isaiah Rashad", "DaBaby"],
            correct: "3",
            correctTitle: "DaBaby", 
            correctInfo: "Rising rap star DaBaby released album KIRK in September 2019, reaching No. 1 Album on the Billboard Charts"

        },
        {
            question: "What is the most globally streamed song of 2019 on Spotify as of October 1, 2019?",
            guessOption: ["Señorita - Camila Cabello and Shawn Mendes", "Great White Buffalo - Ted Nugent", "Shape of You - Ed Sheeran", "Sunflower - Post Malone"],
            correct: "0",
            correctTitle: "Señorita by Camila Cabello and Shawn Mendes",
            correctInfo: ""
        },
        {
            question: "Who has the most songs on Spotify’s USA Top 200 as of Oct. 1,  2019?",
            guessOption: ["Ariana Grande", "Taylor Swift", "Ed Sheeran", "Post Malone"],
            correct: "3", 
            correctTitle: "Post Malone",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Which breakout Houston singer and rapper ranks 63rd on Spotify’s top listened to artists as of Oct. 1, 2019?",
            guessOption: ["Drake", "Princess Nokia", "Lizzo", "Miley Cyrus"],
            correct: "2", 
            correctTitle: "Lizzo",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Where does Taylor Swift rank on Spotify’s most listened to artists charts as of Oct. 1, 2019",
            guessOption: ["14th", "1st", "2nd", "7th"],
            correct: "0", 
            correctTitle: "14th",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Which rapper defined the 'Hot Girl Summer' with 2019 releases such as Cash Shit (feat. DaBaby) and Simon Says (feat. Juicy J)?",
            guessOption: ["Lizzo", "Kash Doll", "Megan Thee Stallion", "Nicki Minaj"],
            correct: "2", 
            correctTitle: "Megan Thee Stallion",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Who is the number one streamed artist on Spotify as of Oct. 1, 2019?",
            guessOption: ["Justin Bieber", "Ariana Grande", "Shawn Mendez", "Ed Sheeran"],
            correct: "3", 
            correctTitle: "Ed Sheeran",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Which cult-favorite indie-rock band released their long-awaited 4th studio album in May 2019?",
            guessOption: ["alt-J", "Vampire Weekend", "Florence + Machine", "HAIM"],
            correct: "1", 
            correctTitle: "Vampire Weekend",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "What 2019 hit was #1 on the Billboard Hot 100 for a record-breaking 19 consecutive weeks?",
            guessOption: ["7 Rings - Ariana Grande", "Old Town Road - Lil Nas X", "Sunflower - Post Malone", "High Hopes - Panic! At The Disco"],
            correct: "1", 
            correctTitle: "Old Town Road - Lil Nas X",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Where does Beyonce rank on Spotify’s Most Streamed Artists chart as of Oct.1, 2019?",
            guessOption: ["#3 Most Streamed", "#63 Most Streamed", "#42 Most Streamed", "#10 Most Streamed"],
            correct: "2", 
            correctTitle: "#42 Most Streamed",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Which Charlie’s Angels trio member released a new album in Aug 2019 featuring a Sublime cover?", 
            guessOption: ["Miley Cyrus", "Lana Del Rey", "SZA", "Camila Cabelo"],
            correct: "1", 
            correctTitle: "Lana Del Rey with Doin Time",
            correctInfo: "Blah blah paragraph 4"
        },
        {
            question: "Which platinum-selling singer-songwriter released fourth studio album LOVE + FEAR with hit electronic single “Baby feat. Clean Bandit", 
            guessOption: ["MARINA (formally Marina and The Diamonds)", "Britney Spears", "Foxes", "Ellie Goulding"],
            correct: "0", 
            correctTitle: "MARINA",
            correctInfo: "Blah blah paragraph 4"
        },
    ];

    // ------------------ VARIABLES ---------------------------------
    
    var myTimer = null;
    var myTimeout = null;
    var wins = 0;
    var answered = false;
    var index = 0; 
    var time = 15;
    var clockRunning = false;

    function timerStart(){
        if (!clockRunning) {
            myTimer = setInterval(count, 1000);
            clockRunning = true;
        }
    }

    function count(){
        time--
        if (time === 0) {
            stop();
        }
        
        $("#timer").html(time);
            if(time === 0){
                stop();
                $("#timer").hide();
                $("#game-contents").html("<h4> Sorry, no more time left!</h4>");
            }   else if (time <= 5) {
                $("#timer").html("<h4> You have " + time + " seconds left </h4>");
            } 
    };

    function stop(){
        clearInterval(myTimer);
        clockRunning = false;
    }

    function hideIntro() {
        $("#intro").hide();
    };

    //use this function to display the question and answer 

    function displayQA(){
        correct = questionsAnswers[index].correct;
        var question = questionsAnswers[index].question;

        $("#display-question").html(question);

        for (var i = 0; i < questionsAnswers[index].guessOption.length; i++) {
            var answer = questionsAnswers[index].guessOption[i];
            $("#display-options").append("<li class= guess-options id =" + i + ">" + answer + "</li>")
        }
    }

    //this function starts the game

    function startGame(){
        displayQA();
        $("#display-question").show();
        $("#display-options").show();
        $("#timer").show();
    };

    //this function occurs when user clicks guess options 

    $("#display-options").on("click", ".guess-options", function (event){
        stop();
        $("#timer").html("");
        var id = $(this).attr("id");
        if (id === correct){
            correctAnswer();
            clearInterval(myTimer);
        } else {
            clearInterval(myTimer);
            incorrectAnswer();
        }
    })

    // 2. display questions, options, timer

    $("#start-button").click(function () {
        hideIntro();
        startGame();
        timerStart();
    });

function correctAnswer(){

    $("#display-question").html("");
    $("#display-options").html("");
    $("#game-content").append("<div class= correct>").html("<h2>You're right!</h2>");

        for (var i = 0; i < questionsAnswers.length; i++) {
            var correctTitle = questionsAnswers[index].correctTitle;
            var correctInfo = questionsAnswers[index].correctInfo;
        }

    $("#game-content").html("<h4>" + correctTitle + "</h4>");
    $("#game-content").html("<h4>" + correctInfo + "</h4>");


    myTimeout = setTimeout(function(){
        $("#game-content").html("");
        
    }, 10000);

    index++
    wins++
};

function incorrectAnswer(){
    $("#display-question").html("");
    $("#display-options").html("");
    $("#timer").html("");
    $("#game-content").append("<div class= correct>").html("<h2>Nice Try!</h2>");

    for (var i = 0; i < questionsAnswers.length; i++) {
        var correctTitle = questionsAnswers[index].correctTitle;
        var correctInfo = questionsAnswers[index].correctInfo;
    }

    $("#game-content").append("<h4>" + correctTitle + "</h4>");
    $("#game-content").append("<h4>" + correctInfo + "</h4>");

    myTimeout = setTimeout(function(){
        $("#game-content").html("");
        
    }, 3000);

    console.log(index);
    index++
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