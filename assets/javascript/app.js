// GOAL -- > get next question to appear after user clicks button, implement timer after this works

var countDown = 15;
var index = 0;
var wins = 0;
var losses = 0;
var correct;
var option = "";
var myTimer; 
var myTimeout;
var clockRunning = false;

//questions 
var questionsAnswers = [
    {
        question: "how long was bad guy by Billie Eilish #1 on the Billboard charts?",
        userResponseOption: ["three weeks", "one week", "two weeks", "six weeks"],
        correct: "one week",
        correctTitle: "one week!",
        correctInfo: "Billie Eilish earned her first number one single in August 2019, after a record-breaking nine-week wait in the runner up spot."
    },
    {
        question: "Which rapper with nearly 17,000,000 monthly listeners on Spotify released a new album in late 2019, titled KIRK?",
        userResponseOption: ["2 Chainz", "Pusha T", "Isaiah Rashad", "DaBaby"],
        correct: "DaBaby",
        correctTitle: "DaBaby",
        correctInfo: "Rising rap star DaBaby released album KIRK in September 2019, reaching No. 1 Album on the Billboard Charts"

    },
    {
        question: "What is the most globally streamed song of 2019 on Spotify as of October 1, 2019?",
        userResponseOption: ["Señorita - Camila Cabello and Shawn Mendes", "Cheeseburger in Paradise - Jimmy Buffet", "Shape of You - Ed Sheeran", "Sunflower - Post Malone"],
        correct: "Señorita - Camila Cabello and Shawn Mendes",
        correctTitle: "Señorita by Camila Cabello and Shawn Mendes",
        correctInfo: ""
    },
    {
        question: "Who has the most songs on Spotify’s USA Top 200 as of Oct. 1,  2019?",
        userResponseOption: ["Ariana Grande", "Taylor Swift", "Ed Sheeran", "Post Malone"],
        correct: "Post Malone",
        correctTitle: "Post Malone",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which breakout Houston singer and rapper ranks 63rd on Spotify’s top listened to artists as of Oct. 1, 2019?",
        userResponseOption: ["Drake", "Princess Nokia", "Lizzo", "Miley Cyrus"],
        correct: "Lizzo",
        correctTitle: "Lizzo",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Where does Taylor Swift rank on Spotify’s most listened to artists charts as of Oct. 1, 2019",
        userResponseOption: ["14th", "1st", "2nd", "7th"],
        correct: "14th",
        correctTitle: "14th",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which rapper defined the 'Hot Girl Summer' with 2019 releases such as Cash Shit (feat. DaBaby) and Simon Says (feat. Juicy J)?",
        userResponseOption: ["Lizzo", "Kash Doll", "Megan Thee Stallion", "Nicki Minaj"],
        correct: "Megan Thee Stallion",
        correctTitle: "Megan Thee Stallion",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Who is the number one streamed artist on Spotify as of Oct. 1, 2019?",
        userResponseOption: ["Justin Bieber", "Ariana Grande", "Shawn Mendez", "Ed Sheeran"],
        correct: "Ed Sheeran",
        correctTitle: "Ed Sheeran",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which cult-favorite indie-rock band released their long-awaited 4th studio album in May 2019?",
        userResponseOption: ["alt-J", "Vampire Weekend", "Florence + Machine", "HAIM"],
        correct: "Vampire Weekend",
        correctTitle: "Vampire Weekend",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "What 2019 hit was #1 on the Billboard Hot 100 for a record-breaking 19 consecutive weeks?",
        userResponseOption: ["7 Rings - Ariana Grande", "Old Town Road - Lil Nas X", "Sunflower - Post Malone", "High Hopes - Panic! At The Disco"],
        correct: "Old Town Road - Lil Nas X",
        correctTitle: "Old Town Road - Lil Nas X",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Where does Beyonce rank on Spotify’s Most Streamed Artists chart as of Oct.1, 2019?",
        userResponseOption: ["#3 Most Streamed", "#63 Most Streamed", "#42 Most Streamed", "#10 Most Streamed"],
        correct: "#63 Most Streamed",
        correctTitle: "#42 Most Streamed",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which Charlie’s Angels trio member released a new album in Aug 2019 featuring a Sublime cover?",
        userResponseOption: ["Miley Cyrus", "Lana Del Rey", "SZA", "Camila Cabelo"],
        correct: "Lana Del Rey",
        correctTitle: "Lana Del Rey with Doin Time",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which platinum-selling singer-songwriter released fourth studio album LOVE + FEAR with hit electronic single “Baby feat. Clean Bandit",
        userResponseOption: ["MARINA (formally Marina and The Diamonds)", "Britney Spears", "Foxes", "Ellie Goulding"],
        correct: "MARINA (formally Marina and The Diamonds)",
        correctTitle: "MARINA",
        correctInfo: "Blah blah paragraph 4"
    },
];


// prompt questions
function createQuestions() {
    var promptQuestion = questionsAnswers[index].question;
    $(".display-question").append(promptQuestion);
}

//options for response
function createRadioInput() {
    // run through object using for loop
    for (var i = 0; i < questionsAnswers[index].userResponseOption.length; i++) {

        correctResponse = questionsAnswers[index].correct;

        option = questionsAnswers[index].userResponseOption[i];

        // create one radio input for each potential response

        $('<input>').attr({
            type: 'radio',
            id: option,
            name: 'option-for-response',
            value: option
        }).appendTo('.display-options');

        $('.display-options').append('<label>' + option + '</label>');
        $('.display-options').append('<br>');
    }
};

//creates submit button with each question
function createSubmitButton() {
    $('#submit-button').html('<button id= testing-button>');
    $('button').text('submit here');
};

//if user guesses correctly 
function userCorrect() {
    wins++;

    $('.display-question').empty();
    $('.display-options').empty();
    $('#submit-button').empty();

    //display correct information
    correctInformation();
}

function correctInformation() {
    doneTimer();
    timeout();
    var correctTitle = questionsAnswers[index].correctTitle;
    var correctInfo = questionsAnswers[index].correctInfo;

    $('.display-question-options').append('<div id= correct-information>');
    $('#correct-information').append('<h1>' + correctTitle + '</h1>');
    $('#correct-information').append('<p>' + correctInfo + '</p>');
}

function timeout(){
    myTimeout = setTimeout(function(){
        $('#correct-information').empty(); 
        index++;
        startGame();
    }, 5000);
}

function userIncorrect() {
    doneTimer();
    losses++

    $('.display-question').empty();
    $('.display-options').empty();
    $('#submit-button').empty();

    //display correct information
    correctInformation();
}

//after 5 seconds, move to the next question


function nextRound() {
    index++;
    startGame();
};

//timer function
function timer() {
    clockRunning = true;
    countDown--;
    console.log(countDown);
    if (countDown === 0) {
        doneTimer();
    }
};

function doneTimer() {
    //check radio inputs using for loop to see what user clicked is the same as correct answer
    // if correct increment correct variable
    // if incorrect increment incorrect variable 
    // call our result function 
    
    clearInterval(myTimer);
    clockRunning = false;
    countDown = 15;
}

function result() {
    //clear timer
    //how many right displayed
    //how many wrong displayed 
}

function startGame() {
    createRadioInput();
    createQuestions();
    createSubmitButton();
}

//start game from intro
$("#start-button").on("click", function() {
    $('#intro').empty();
    startGame();
    myTimer = setInterval(timer, 1000);
    
});


//check option choice 
$('#submit-button').on('click', function() {

    var inputValue = $('input[name=option-for-response]:checked').val();
    alert(inputValue);

    if (inputValue === correctResponse) {
        userCorrect();
        //give user 1 win, add to the index, move to next question
    } else {
        userIncorrect();
    }
});



































    // var questionsAnswers = [
    //     {
    //         question: "how long was bad guy by Billie Eilish #1 on the Billboard charts?",
    //         guessOption: ["three weeks", "one week", "two weeks", "six weeks"],
    //         correct: "1",
    //         correctTitle: "one week!",
    //         correctInfo: "Billie Eilish earned her first number one single in August 2019, after a record-breaking nine-week wait in the runner up spot."
    //     },
    //     {
    //         question: "Which rapper with nearly 17,000,000 monthly listeners on Spotify released a new album in late 2019, titled KIRK?",
    //         guessOption: ["2 Chainz", "Pusha T", "Isaiah Rashad", "DaBaby"],
    //         correct: "3",
    //         correctTitle: "DaBaby", 
    //         correctInfo: "Rising rap star DaBaby released album KIRK in September 2019, reaching No. 1 Album on the Billboard Charts"

    //     },
    //     {
    //         question: "What is the most globally streamed song of 2019 on Spotify as of October 1, 2019?",
    //         guessOption: ["Señorita - Camila Cabello and Shawn Mendes", "Great White Buffalo - Ted Nugent", "Shape of You - Ed Sheeran", "Sunflower - Post Malone"],
    //         correct: "0",
    //         correctTitle: "Señorita by Camila Cabello and Shawn Mendes",
    //         correctInfo: ""
    //     },
    //     {
    //         question: "Who has the most songs on Spotify’s USA Top 200 as of Oct. 1,  2019?",
    //         guessOption: ["Ariana Grande", "Taylor Swift", "Ed Sheeran", "Post Malone"],
    //         correct: "3", 
    //         correctTitle: "Post Malone",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Which breakout Houston singer and rapper ranks 63rd on Spotify’s top listened to artists as of Oct. 1, 2019?",
    //         guessOption: ["Drake", "Princess Nokia", "Lizzo", "Miley Cyrus"],
    //         correct: "2", 
    //         correctTitle: "Lizzo",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Where does Taylor Swift rank on Spotify’s most listened to artists charts as of Oct. 1, 2019",
    //         guessOption: ["14th", "1st", "2nd", "7th"],
    //         correct: "0", 
    //         correctTitle: "14th",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Which rapper defined the 'Hot Girl Summer' with 2019 releases such as Cash Shit (feat. DaBaby) and Simon Says (feat. Juicy J)?",
    //         guessOption: ["Lizzo", "Kash Doll", "Megan Thee Stallion", "Nicki Minaj"],
    //         correct: "2", 
    //         correctTitle: "Megan Thee Stallion",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Who is the number one streamed artist on Spotify as of Oct. 1, 2019?",
    //         guessOption: ["Justin Bieber", "Ariana Grande", "Shawn Mendez", "Ed Sheeran"],
    //         correct: "3", 
    //         correctTitle: "Ed Sheeran",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Which cult-favorite indie-rock band released their long-awaited 4th studio album in May 2019?",
    //         guessOption: ["alt-J", "Vampire Weekend", "Florence + Machine", "HAIM"],
    //         correct: "1", 
    //         correctTitle: "Vampire Weekend",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "What 2019 hit was #1 on the Billboard Hot 100 for a record-breaking 19 consecutive weeks?",
    //         guessOption: ["7 Rings - Ariana Grande", "Old Town Road - Lil Nas X", "Sunflower - Post Malone", "High Hopes - Panic! At The Disco"],
    //         correct: "1", 
    //         correctTitle: "Old Town Road - Lil Nas X",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Where does Beyonce rank on Spotify’s Most Streamed Artists chart as of Oct.1, 2019?",
    //         guessOption: ["#3 Most Streamed", "#63 Most Streamed", "#42 Most Streamed", "#10 Most Streamed"],
    //         correct: "2", 
    //         correctTitle: "#42 Most Streamed",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Which Charlie’s Angels trio member released a new album in Aug 2019 featuring a Sublime cover?", 
    //         guessOption: ["Miley Cyrus", "Lana Del Rey", "SZA", "Camila Cabelo"],
    //         correct: "1", 
    //         correctTitle: "Lana Del Rey with Doin Time",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    //     {
    //         question: "Which platinum-selling singer-songwriter released fourth studio album LOVE + FEAR with hit electronic single “Baby feat. Clean Bandit", 
    //         guessOption: ["MARINA (formally Marina and The Diamonds)", "Britney Spears", "Foxes", "Ellie Goulding"],
    //         correct: "0", 
    //         correctTitle: "MARINA",
    //         correctInfo: "Blah blah paragraph 4"
    //     },
    // ];

//     // ------------------ VARIABLES ---------------------------------

//     var myTimer = null;
//     var myTimeout = null;
//     var wins = 0;
//     var answered = false;
//     var index = 0; 
//     var time = 15;
//     var clockRunning = false;

//     // function timerStart(){
//     //     if (!clockRunning) {
//     //         myTimer = setInterval(count, 1000);
//     //         clockRunning = true;
//     //     }
//     // }

//     // function count(){
//     //     time--
//     //     console.log(time);

//     //     if (time === 0) {
//     //         stop();
//     //     }

//     //     $("#timer").html(time);
//     //     if(time === 0){
//     //         stop();
//     //         $("#timer").hide();
//     //         $("#game-content").html("<h4> Sorry, no more time left!</h4>");
//     //         time = 15
//     //         hideIntro();
//     //         startGame();
//     //         timerStart();
//     //     }else if (time <= 5) {
//     //         $("#timer").html("<h4> You have " + time + " seconds left </h4>");
//     //     } 
//     // };

//     // function stop(){
//     //     clearInterval(myTimer);
//     //     clockRunning = false;
//     //     time = 15;
//     // }

//     function hideIntro() {
//         $("#intro").hide();
//     };

//     //use this function to display the question and answer 

//     function displayQA(){

//         var question; 

//         var correctAnswer;

//         for (var i = 0; i < questionsAnswers[i].guessOption.length; i++) {

//             question = questionsAnswers[i].question;
//             correctAnswer = questionsAnswers[i].correct;

//             var answer = questionsAnswers[i].guessOption[i];

//             $("#display-question").html(this.question);

//             $("#display-options").append("<li class= guess-options id =" + i + ">" + answer + "</li>")
//         }
//     }

//     //this function starts the game

//     function startGame(){
//         displayQA();
//         $("#display-question").show();
//         $("#display-options").show();

//         timer = 15;
//     };

//     //this function occurs when user clicks guess options 

//     $("#display-options").on("click", ".guess-options", function (event){
//         $("#timer").html("");
//         var id = $(this).attr("id");

//         if (id === correct){
//             stop();
//             correctAnswer();
//             displayQA();
//             console.log("i clicked correct answer");
//         } else {
//             stop();
//             incorrectAnswer();
//             displayQA();
//         }
//     })

//     // 2. display questions, options, timer

//     $("#start-button").click(function () {
//         hideIntro();
//         startGame();
//         // timerStart();
//     });

// function correctAnswer(){

//     $("#display-question").html("");
//     $("#display-options").html("");
//     $("#game-content").html("<div class= correct><h2>You're right!</h2></div>");

//     var correctTitle = questionsAnswers[index].correctTitle;
//     var correctInfo = questionsAnswers[index].correctInfo;


//     $("#game-content").append("<h4>" + correctTitle + "</h4>");
//     $("#game-content").append("<h4>" + correctInfo + "</h4>");


//     // myTimeout = setTimeout(function(){
//     //     $("#game-content").html("");
//     //     index++
//     //     wins++
//     //     time = 15;
//     //     startGame();
//     //     timerStart();
//     //     $("#game-content").empty();
//     // }, 3000);


// };

// function incorrectAnswer(){
//     $("#display-question").html("");
//     $("#display-options").html("");
//     // $("#timer").html("");
//     $("#game-content").append("<div class= correct>").html("<h2>Nice Try!</h2>");

//     for (var i = 0; i < questionsAnswers.length; i++) {
//         var correctTitle = questionsAnswers[i].correctTitle;
//         var correctInfo = questionsAnswers[i].correctInfo;
//     }

//     $("#game-content").append("<h4>" + correctTitle + "</h4>");
//     $("#game-content").append("<h4>" + correctInfo + "</h4>");

//     // myTimeout = setTimeout(function(){
//     //     $("#game-content").html("");

//     // }, 3000);

//     console.log(index);
//     index++
//     startGame();
//     // timerStart();
// }


// // PSUEDO CODE 

// //1. user arrives at screen with instructions on how to run application and start button
// //2. user clicks start button
//     //2.5. clears the initial screen 
//     // one question
//     // four guess options, 
//     // one submit button.
//     // one timer
// //3. timer starts
//     // user has 15 seconds to guess

// //4. if user guesses correctly
//     // stop the clock
//     // clear screen to congratulations page 
//     // 5 seconds wait, then next question
//     // tally one win

// //5. if user guesses incorrectly
//     // stop the clock
//     // clear screen to provide correct answer
//     // 5 seconds wait, then next question

// //6. if user takes too long to guess
//     // stop the clock
//     // say took too long to guess
//     // 5 seconds, next question

// //7. On final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)