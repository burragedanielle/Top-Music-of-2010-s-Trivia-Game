// GOAL -- > get next question to appear after user clicks button, implement timer after this works

var countDown = 20;
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
        question: 'Which unlikely indie pop star suprised fans after announcing she was dating billionaire CEO of Tesla, Elon Musk in 2018?',
        userResponseOption: ['MARINA', 'Grimes', 'Lana Del Rey', 'FKA twigs'],
        correct: 'Grimes',
        correctTitle: "Grimes",
        correctInfo: "Fans were shocked to discover that Elon Musk and Grimes were dating, though some see the connection as they both love space and anime. The couple is still reportedly together today."
    },
    {
        question: 'Which single brought recording-artist Sia into mainstream fame as a solo recording artist?',
        userResponseOption: ["\'Chandelier\'", "\'Wild Ones\' (ft. FloRida)", "\'Cheap Thrills\'", "\'Titanium\'"],
        correct: "\'Chandelier\'",
        correctTitle: "\'Chandelier\'",
        correctInfo: "In 2014, Sia\'s single \'Chandelier\' dominating the charts for weeks as a top 10 single, and was later nominated for Best Music Video of 2014."

    },
    {
        question: 'Which hip-hop star collaborated with Kanye West and released the highly anticipated collaboration album \'Watch The Throne\' in 2011?',
        userResponseOption: ["2 Chainz", "JAY-Z", "Big Sean", "Kid Cuddi"],
        correct: "JAY-Z",
        correctTitle: "JAY-Z",
        correctInfo: "In August of 2011, JAY-Z and Kanye released \'Watch The Throne\' spawning singles such as \'HAM\', \'Otis'\, \'No Church in the Wild'\ and \'N*** in Paris'\ and the second highest grossing hip hop concert tour in history."

    },
    {
        question: "Which artist has had the most number one singles in this decade?",
        userResponseOption: ["Rihanna", "Taylor Swift", "Ed Sheeran", "Drake"],
        correct: "Rihanna",
        correctTitle: "Rihanna",
        correctInfo: "Rihanna has earned the most #1 singles in the 2010\'s decade, spending 41 weeks at the top of the charts."
    },
    {
        question: "Which Katy Perry album released in this decade had six singles from the same album reach the top five on the Billboard Hot 100?",
        userResponseOption: ["\'Teenage Dream\' (2010)", "\'California Gurls\' (2010)", "\'Witness\' (2017)", "\'Prism\' (2013)"],
        correct: "\'Teenage Dream\' (2010)",
        correctTitle: "\'Teenage Dream\' (2010)",
        correctInfo: "Katy Perry\'s \'Teenage Dream\' was Katy Perry's first release during the decade. This included smash hits such as \'California Gurls\', \'Last Friday Night (T.G.I.F)\', \'Firework\', and \'E.T.\'"
    },
    {
        question: "Which platinum-selling artist released three albums in the 2010\'s (and each debuted at number one, making every album they've released debut at No. 1)",
        userResponseOption: ["Beyoncé", "Taylor Swift", "Drake", "Ed Sheeran"],
        correct: "Beyoncé",
        correctTitle: "Beyoncé",
        correctInfo: "Beyoncé released three albums in the past decade - \'4\' (2011), \'Beyonce\' (2015), and \'Lemonade\' (2016)"
    },
    {
        question: "Which song was an unlikely summer chart topper in 2015?",
        userResponseOption: ["\'Trap Queen\' - Fetty Wap", "\'Despacito\' - Justin Bieber", "\'Summertime Sadness\' - Lana Del Rey", "\'Fancy\' - Iggy Azalea"],
        correct: "\'Trap Queen\' - Fetty Wap",
        correctTitle: "\'Trap Queen\' - Fetty Wap",
        correctInfo: "In the summer of 2015, we were listening to Fetty Wap\'s \'Trap Queen\'. It spent a consecuitive 25 weeks in the top ten, peaking at number 2."
    },
    {
        question: "Which flute-playing Houston singer and rapper rose to mainstream fame in 2019?",
        userResponseOption: ["Grimes", "Princess Nokia", "Lizzo", "Tyler The Creator"],
        correct: "Lizzo",
        correctTitle: "Lizzo",
        correctInfo: "American singer and rapper Lizzo rose to mainstream fame after No. 1 single \'Truth Hurts\' became a viral sleeper hit, topping charts two years after its initial release." 
    },
    {
        question: "Which year brought us the forming of sister pop-rock super-group HAIM?",
        userResponseOption: ["2013", "2015", "2012", "2018"],
        correct: "2012",
        correctTitle: "2012",
        correctInfo: "In mid 2012, sisters Este, Danielle and Alana formed the pop rock band titled in namesake of their shared last name, HAIM. They released their first album \'Days Are Gone\' in late 2013 featuring singles such as \'Forever\' and \'The Wire\'."
    },
    {
        question: "Which summer in the 2010's were we listening to Carly Rae Jepsen's \'Call Me Maybe\'? on repeat?",
        userResponseOption: ["Summer of 2012", "Summer of 2014", "Summer of 2015", "Summer of 2013"],
        correct: "2012",
        correctTitle: "2012",
        correctInfo: "\'Call Me Maybe\' was the best-selling single of 2012, reaching No. 1 in 18 countries. The single catipulted the Canadian pop-vocalist into global super-stardom."
    },
    {
        question: "Who is the number one streamed artist on Spotify as of Oct. 1, 2019?",
        userResponseOption: ["Justin Bieber", "Ariana Grande", "Shawn Mendez", "Ed Sheeran"],
        correct: "Ed Sheeran",
        correctTitle: "Ed Sheeran",
        correctInfo: "Blah blah paragraph 4"
    },
    {
        question: "Which pop vocalist and icon died in early 2012 at age 48?",
        userResponseOption: ["Whitney Houston", "Avril Lavigne", "Amy Winehouse", "Left Eye of TLC"],
        correct: "Whitney Houston",
        correctTitle: "Whitney Houston",
        correctInfo: "Whitney Houston died in 2012. In the wake of the tragic loss, sales of her albums spike and \'I Will Always Love You'\ re-enters the top ten of the Billboard Hot 100."
    },
    {
        question: "What 2019 hit was #1 on the Billboard Hot 100 for a record-breaking 19 consecutive weeks beating out Mariah Carey\'s 1995 hit \'One Sweet Day'\?",
        userResponseOption: ["7 Rings - Ariana Grande", "Old Town Road - Lil Nas X", "Sunflower - Post Malone", "High Hopes - Panic! At The Disco"],
        correct: "Old Town Road - Lil Nas X",
        correctTitle: "Old Town Road - Lil Nas X",
        correctInfo: "Breakout star Lil Nas X had no idea that his country-rap song \'Old Town Road\' would receive so much success. He purchased the instrumental for US $30 and recorded the song in one day."
    },
    {
        question: "Which 2011 Adele album featured smash hits such as \'Set Fire To the Rain\', \'Someone Like You\' and \'Rolling in the Deep\'?",
        userResponseOption: ["\'21\'", "\'19\'", "\'24\'", "\'Hello\'"],
        correct: "\'21\'",
        correctTitle: "\'21\'",
        correctInfo: "The highly-successful 2011 release of Adele's \'21\' album solidified this vocalist\'s standing on the international charts. Adele won six Grammys for this album, including Album of The Year."
    },
    {
        question: "Which highly successful early aughties band known to be one of the world\'s best-selling groups of all time went on hiatus in 2011 after releasing their final album \'The E.N.D\'?",
        userResponseOption: ['LMFAO', 'Black Eyed Peas', 'Destiny\'s Child', 'Backstreet Boys'],
        correct: "Black Eyed Peas",
        correctTitle: "Black Eyed Peas",
        correctInfo: "The Black Eyed Peas who ranked 7th in the Hot 100 Artists for the prior decade, released their final album in 2011, marking the end of the aughties era of music."
    },
    {
        question: "Which year did Taylor Swift release her hit single \'Shake it Off?\'",
        userResponseOption: ["2014", "2016", "2011", "2015"],
        correct: "2014",
        correctTitle: "2014",
        correctInfo: "In August of 2014, Taylor Swift released her carefree smash-hit \'Shake it Off?\' prior to releasing her \'1989\' album which debut at the second highest amount of copies sold for a female artist, shortly behind Britney Spear\'s \'Oops... I Did It Again\' (2000)."
    },
];


// prompt questions
function createQuestions() {
    var promptQuestion = questionsAnswers[index].question;
    $(".display-question").append('<h3>' + promptQuestion + '</h3>');
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
            class: 'form-radio',
            value: option
        }).appendTo('.display-options');

        $('.display-options').append('<label class= description>' + option + '</label>');
        $('.display-options').append('<br>');
    }
};

//creates submit button with each question
function createSubmitButton() {
    $('#submit-button').html('<button class= btn btn-white btn-fill id= testing-button>');
    $('button').text('submit here');
};

//if user guesses correctly 
function userCorrect() {
    wins++;

    // $('.display-question').empty();
    // $('.display-options').empty();
    // $('#submit-button').empty();

    //display correct information
    correctInformation();
}

function correctInformation() {
    doneTimer();
    timeout();
    var correctTitle = questionsAnswers[index].correctTitle;
    var correctInfo = questionsAnswers[index].correctInfo;

    result();

    $('.display-question-options').append('<div id= correct-information>');
    $('#correct-information').append('<h1>' + correctTitle + '</h1>');
    $('#correct-information').append('<p>' + correctInfo + '</p>');
}

function timeout(){
    myTimeout = setTimeout(function(){
        $('#answer').empty();
        $('#correct-information').empty(); 
        index++;
        startGame();
    }, 5000);
}

function userIncorrect() {
    doneTimer();
    losses++

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
    $("#timer").html(countDown);
    if (countDown === 0) {
        doneTimer();
       
        $('.display-question').empty();
        $('.display-options').empty();
        $('#submit-button').empty();
        $('#wins').empty();
        $('#losses').empty();
        $('.display-question').append('<p id= answer class= section-header> No more time! </p>');
        
        userIncorrect();
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
    
    $('#wins').html('<p class= description> Wins: ' + wins + '</p>');
    $('#losses').html('<p class= description> Losses: ' + losses + '</p>');
    //how many wrong displayed 
}

function startGame() {

    createRadioInput();
    createQuestions();
    createSubmitButton();
    $('#wins').empty();
    $('#losses').empty();
    timer();
    myTimer = setInterval(timer, 1000);
}

//start game from intro
$("#start-button").on("click", function() {
    $('#intro').empty();
    startGame();
});


//check option choice 
$('#submit-button').on('click', function() {

    var inputValue = $('input[name=option-for-response]:checked').val();

    if (inputValue === correctResponse) {
        $('.display-question').empty();
        $('.display-options').empty();
        $('#submit-button').empty();
        $('#wins').empty();
        $('#losses').empty();

        $('.display-question').append('<p id= answer class= section-header> Correct! </p>')

        userCorrect();
        //give user 1 win, add to the index, move to next question
    } else {
        $('.display-question').empty();
        $('.display-options').empty();
        $('#submit-button').empty();
        $('#wins').empty();
        $('#losses').empty();

        $('.display-question').append('<p id= answer class= section-header> Nice Try! </p>')

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