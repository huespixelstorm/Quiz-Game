// Query Selectors
const answerBtn = document.querySelectorAll(".answerBtn");

const theme = document.querySelector("#theme");
const gameMode = document.querySelector("#gamemode");

const gameruleBtn = document.querySelector("#gamerule");
const question = document.querySelector("#question");
const questionNo = document.querySelector("#questionNo");
const announceResult = document.querySelector("#result");

const score = document.querySelector("#score");

let scoreCounter = 0;
let gamerule = 0;

let maxRounds = 0;
let selectedTheme = "";

let currentQuestion = 0;
let quizQuestions = [];


// Disable answer buttons initially
answerBtn.forEach(button => {
    button.disabled = true;
});


// Button click
answerBtn.forEach(button => {
    button.addEventListener("click", () => {

        // Remove selection from all buttons
        answerBtn.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Select clicked button
        button.classList.add("selected");


        // GAMEMODE SELECTION
        if (gameruleBtn.textContent === "->") {

            maxRounds = Number(button.dataset.rounds);

            gameMode.textContent = `Gamemode: ${maxRounds} Questions`;

        }


        // THEME SELECTION
        else if (gameruleBtn.textContent === "Go!") {

            selectedTheme = button.dataset.theme;

            theme.textContent = `Theme: ${selectedTheme}`;

        }


        // ANSWER SELECTION
        else if (gameruleBtn.textContent === "Next" ||
                 gameruleBtn.textContent === "Finish") {

            checkAnswer(button);

        }

    });
});


// Main button
gameruleBtn.addEventListener("click", () => {

    if (gameruleBtn.textContent === "START") {

        startPhase();

    }

    else if (gameruleBtn.textContent === "->") {

        chooseTheme();

    }

    else if (gameruleBtn.textContent === "Go!") {

        if (maxRounds === 0) {
            announceResult.textContent = "Choose the number of questions first!";
            return;
        }

        if (selectedTheme === "") {
            announceResult.textContent = "Choose a theme first!";
            return;
        }

        gamerule = 1;
        playing();

    }

    else if (gameruleBtn.textContent === "Next") {

        currentQuestion++;

        displayQuestion();

    }

    else if (gameruleBtn.textContent === "Finish") {

        endGame();

    }

});


// START
function startPhase() {
    questionsAmount();
}


// Choose number of questions
function questionsAmount() {

    gameruleBtn.textContent = "->";

    question.textContent = "Choose the number of questions...";

    announceResult.textContent = "-";

    answerBtn.forEach(button => {

        button.disabled = false;

        button.textContent = Number(button.dataset.rounds);

    });
}


// Choose theme
function chooseTheme() {

    gameruleBtn.textContent = "Go!";

    question.textContent = "Choose the theme...";

    announceResult.textContent = "-";

    answerBtn.forEach(button => {

        button.disabled = false;

        button.textContent = button.dataset.theme;

    });
}


// IN-GAME
function playing() {

    // Get the selected question set
    quizQuestions = questionSets[selectedTheme];

    currentQuestion = 0;
    scoreCounter = 0;

    score.textContent = "Score: 0";

    displayQuestion();

}


// Get and display questions
function displayQuestion() {

    const current = quizQuestions[currentQuestion];

    questionNo.textContent =
        `Question ${currentQuestion + 1} / ${maxRounds}`;

    question.textContent = current.question;

    announceResult.textContent = "-";


    answerBtn.forEach((button, index) => {

        button.disabled = false;

        button.classList.remove("selected");

        button.textContent = current.choices[index];

    });


    // Change button text on last question
    if (currentQuestion === maxRounds - 1) {

        gameruleBtn.textContent = "Finish";

    } else {

        gameruleBtn.textContent = "Next";

    }

}


// Check answer
function checkAnswer(button) {

    const current = quizQuestions[currentQuestion];

    answerBtn.forEach(btn => {
        btn.disabled = true;
    });


    if (button.textContent === current.correctAns) {

        scoreCounter++;

        announceResult.textContent = "Correct!";

    } else {

        announceResult.textContent =
            `Wrong! Correct answer: ${current.correctAns}`;

    }

    score.textContent = `Score: ${scoreCounter}`;

}


// End game
function endGame() {

    question.textContent = "Quiz Complete!";

    questionNo.textContent = "";

    announceResult.textContent =
        `Final Score: ${scoreCounter} / ${maxRounds}`;


    answerBtn.forEach(button => {

        button.disabled = true;

        button.classList.remove("selected");

    });


    gameruleBtn.textContent = "START";

    gamerule = 0;

}