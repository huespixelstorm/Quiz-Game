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

const question = document.querySelector("#question");

function getQuestion(questionSet) {
    question.textContent = `${question}`
}