const answerBtn = document.querySelectorAll(".answerBtn")

const optionOne = document.querySelector("#optionOne");
const optionTwo = document.querySelector("#optionTwo");
const optionThree = document.querySelector("#optionThree");
const optionFour = document.querySelector("#optionFour");

const announceResult = document.querySelector("#result");

const score = document.querySelector("#score");
let scoreCounter = 0

optionOne.disabled = true
optionTwo.disabled = true
optionThree.disabled = true
optionFour.disabled = true

answerBtn.forEach((button) => {
    button.addEventListener("click", () => {
        getResults(button)
        console.log(button.textContent) 
    })
})

function getResults(button) {

    optionOne.disabled = true
    optionTwo.disabled = true
    optionThree.disabled = true
    optionFour.disabled = true

    startBtn.disabled = false
    startBtn.textContent = `Next`

    if(button.textContent === selectedQuestion.correctAns) {
        scoreCounter++
        announceResult.textContent = `Correct! Answer is ${selectedQuestion.correctAns}`
        score.textContent = `Score: ${scoreCounter}`
    } else { 
        announceResult.textContent = `Wrong Answer. It's ${selectedQuestion.correctAns}`
    }
}


const theme = document.querySelector("#theme");
const startBtn = document.querySelector("#start");

let selectedQuestion

startBtn.addEventListener("click", () => {      //  START / NEXT / RESET BTN //

    if (startBtn.textContent === "Reset") {
        endGame()
        reset()
        return
    }

    if (questionCounter === 3) {
        startBtn.textContent = "Reset"
        return

    } else { 

    if (startBtn.textContent === "Next" || startBtn.textContent === "START") {

        announceResult.textContent = "-"

        optionOne.disabled = false
        optionTwo.disabled = false
        optionThree.disabled = false
        optionFour.disabled = false
    
    display()

    startBtn.disabled = true
        }
    }
})

const questionNo = document.querySelector("#questionNo")
let questionCounter = 0;

function display() {

         //  ENDGAME FUNCTION 
    if (questionCounter === 3) {

        startBtn.disabled = false
        endGame()
        return
    } else {
        
    questionCounter++
    selectedQuestion = getQuestion()

    question.textContent = selectedQuestion.question
    optionOne.textContent = selectedQuestion.choices[0]
    optionTwo.textContent = selectedQuestion.choices[1] 
    optionThree.textContent = selectedQuestion.choices[2] 
    optionFour.textContent = selectedQuestion.choices[3] 

    theme.textContent = `Theme: ${selectedQuestion.theme}`
    questionNo.textContent = `Q${questionCounter}`

    }
}


const question = document.querySelector("#question");

function getQuestion() {
    return mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
}

function endGame() {

        optionOne.textContent = "-"
        optionTwo.textContent = "-"
        optionThree.textContent = "-"
        optionFour.textContent = "-"

        question.textContent = `Play Again?`

        announceResult.textContent = `Out of ${questionCounter} questions, you got right ${scoreCounter}.`

        startBtn.textContent = "Reset"  //  RESET //
}

function reset() {

    optionOne.disabled = true
    optionTwo.disabled = true
    optionThree.disabled = true
    optionFour.disabled = true

    optionOne.textContent = "-"
    optionTwo.textContent = "-"
    optionThree.textContent = "-"
    optionFour.textContent = "-"

    scoreCounter = 0
    score.textContent = `Score: ${scoreCounter}`

    questionCounter = 0
    questionNo.textContent = `Q${questionCounter}`

    startBtn.textContent = "START"
}