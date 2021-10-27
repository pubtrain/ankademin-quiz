let darkButton = document.querySelector("#darkMode");

darkButton.addEventListener("click", () => {
  let toggleDark = document.body;
  toggleDark.classList.toggle("dark-mode");
})

let restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", () => {
  let restartGame = location.reload();
})

let questionOne = document.querySelectorAll("[name='question1']");
let questionTwo = document.querySelectorAll("[name='question2']");
let questionThree = document.querySelectorAll("[name='question3']");
let questionFour = document.querySelectorAll("[name='question4']");
let questionFive = document.querySelectorAll("[name='question5']");
let questionSix = document.querySelectorAll("[name='question6']");
let questionSeven = document.querySelectorAll("[name='question7']");
let questionEight = document.querySelectorAll("[name='question8']");
let questionTen = document.querySelectorAll("[name='question10']");
let answerOne = "";
let answerTwo = "";
let answerThree = "";
let answerFour = "";
let answerFive = "";
let answerSix = "";
let answerSeven = "";
let answerEight = "";
let answerTen = "";








