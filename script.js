const answerBtn = document

const optionOne = document.querySelector("#optionOne");
const optionTwo = document.querySelector("#optionTwo");
const optionThree = document.querySelector("#optionThree");
const optionFour = document.querySelector("#optionFour");

const announceResult = document.querySelector("#result");

optionThree.addEventListener("click", () => {
    announceResult.textContent = "Correct, 2 x 4 = 8!"
})

optionOne.addEventListener("click", () => {
    announceResult.textContent = "Wrong answer"
})
optionTwo.addEventListener("click", () => {
    announceResult.textContent = "Wrong answer"
})
optionFour.addEventListener("click", () => {
    announceResult.textContent = "Wrong answer"
})


const mathQ1 = {
    question: "2 x 4 = ?",
    choices: ["2", "4", "6", "8"],
    correctAns: "8"
}
const mathQ2 = {
    question: "5 x 5 = ?",
    choices: ["5", "10", "25", "55"],
    correctAns: "25"
}

const mathQuestions = [mathQ1, mathQ2]


const startBtn = document.querySelector("#start");

let selectedQuestion

startBtn.addEventListener("click", () => {
    
    selectedQuestion = getQuestion()

    question.textContent = selectedQuestion.question
    optionOne.textContent = selectedQuestion.choices[0]
    optionTwo.textContent = selectedQuestion.choices[1] 
    optionThree.textContent = selectedQuestion.choices[2] 
    optionFour.textContent = selectedQuestion.choices[3] 
})


const question = document.querySelector("#question");

function getQuestion() {
    return mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
}