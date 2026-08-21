const answerBtn = document.querySelectorAll(".answerBtn")

const optionOne = document.querySelector("#optionOne");
const optionTwo = document.querySelector("#optionTwo");
const optionThree = document.querySelector("#optionThree");
const optionFour = document.querySelector("#optionFour");

const theme = document.querySelector("#theme");
const gameruleBtn = document.querySelector("#gamerule");
const announceResult = document.querySelector("#result");

const score = document.querySelector("#score");
let scoreCounter = 0

answerBtn.forEach(button => {
    button.disabled = true;
});

let gamerule = 0    //  gamemode 0 = Start, 1 = playing, 2 = End

gameruleBtn.addEventListener("click", () => {
    if (gameruleBtn.textContent === "START") {
            
        startPhase()
            return
    } else {

        if (gameruleBtn.textContent === "Go!") {
            gamerule = 1

        }
    }

})

        //  START
function startPhase() {

    gameruleBtn = "Go!"

    answerBtn.forEach(button => {
    button.disabled = false;
})

    answerBtn.forEach((button) => {
        button.addEventListener("click", () => {
         // Remove selected from every button
        answerBtn.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Add selected to the one clicked
        button.classList.add("selected");

        // Remember the choice
        maxRounds = Number(button.dataset.rounds);
    });
});

}