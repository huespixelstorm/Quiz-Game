// Query Selectors
const answerBtn = document.querySelectorAll(".answerBtn");

const theme = document.querySelector("#theme");
const gameMode = document.querySelector("#gamemode");

const gameruleBtn = document.querySelector("#gamerule");
const question = document.querySelector("#question");
const announceResult = document.querySelector("#result");

const score = document.querySelector("#score");

let scoreCounter = 0;
let gamerule = 0;

let maxRounds = 0;
let selectedTheme = "";


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

        gamerule = 1;
        playing();

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

    answerBtn.forEach(button => {

        button.disabled = false;

        button.textContent = Number(button.dataset.rounds);

    });
}


// Choose theme
function chooseTheme() {

    gameruleBtn.textContent = "Go!";

    question.textContent = "Choose the theme...";

    answerBtn.forEach(button => {

        button.disabled = false;

        button.textContent = button.dataset.theme;

    });
}


// IN-GAME
function playing() {

    
}
