# Quiz App

A simple quiz application built using HTML, CSS, and JavaScript.

## Current Features

* Displays a random question from a question bank.
* Shows four answer choices.
* Updates the question and answer buttons dynamically.
* Checks whether the selected answer is correct.
* Displays feedback for correct and incorrect answers.
* Uses JavaScript objects and arrays to store quiz data.

## Technologies Used

* HTML
* CSS
* JavaScript

## Current Question Structure

Each question is stored as an object:

```javascript
{
    question: "2 x 4 = ?",
    choices: ["2", "4", "6", "8"],
    correctAns: "8"
}
```

Questions are stored in an array and selected randomly when the quiz starts.

## Planned Features

* Score tracking
* Question counter
* Multiple categories
* End screen
* Randomized question order
* Improved user interface

## Status

Work in progress. This project is being developed as a learning project to practice JavaScript concepts such as DOM manipulation, event listeners, arrays, objects, functions, and application logic.
