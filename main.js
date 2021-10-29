let darkButton = document.querySelector("#darkMode");

darkButton.addEventListener("click", () => {
  let toggleDark = document.body;
  toggleDark.classList.toggle("dark-mode");
});

let restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", () => {
  let restartGame = location.reload();
});

let container = document.querySelector("#quizContainer")
let correctAnswers = document.querySelector("#correctAnswers");
let answerButton = document.querySelector("#answerButton");
let result = 0;

let questionOne = document.querySelectorAll("[name='question1']");
let questionTwo = document.querySelectorAll("[name='question2']");
let questionThree = document.querySelectorAll("[name='question3']");
let questionFour = document.querySelectorAll("[name='question4']");
let questionFive = document.querySelectorAll("[name='question5']");
let questionSix = document.querySelectorAll("[name='question6']");
let questionSeven = document.querySelectorAll("[name='question7']");
let questionEight = document.querySelectorAll("[name='question8']");
let questionNine = document.querySelectorAll("[name='question9']");
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
let boxAnswer = [];
let correctBox = document.querySelector("#q91");
let correctBoxx = document.querySelector("#q93");
let correctBoxxx = document.querySelector("#q94");
let questionNr = 10;

answerButton.addEventListener("click", () => {
  questionOne.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerOne = correctAnswers.value;
      if(answerOne === "donken") {
        result++; 
      }
    }
});
  questionTwo.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerTwo = correctAnswers.value;
      if(answerTwo === "ica") {
        result++; 
      }
    }
  });
  questionThree.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerThree = correctAnswers.value;
      if(answerThree === "soder") {
        result++; 
      }
    }
  });
  questionFour.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerFour = correctAnswers.value;
      if(answerFour === "koriander") {
        result++; 
      }
    }
  });
  questionFive.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerFive = correctAnswers.value;
      if(answerFive === "indisk") {
        result++; 
      }
    }
  });
  questionSix.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerSix = correctAnswers.value;
      if(answerSix === "cs") {
        result++; 
      }
    }
  });
  questionSeven.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerSeven = correctAnswers.value;
      if(answerSeven === "bajen") {
        result++; 
      }
    }
  });
  questionEight.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerEight = correctAnswers.value;
      if(answerEight === "fernet") {
        result++; 
      }
    }
  });
  questionTen.forEach((correctAnswers) => {
    if(correctAnswers.checked){
      answerTen = correctAnswers.value;
      if(answerTen === "polly") {
        result++; 
      }
    }
  });
  questionNine.forEach((correctAnswers) => {
    if(correctAnswers.checked) {
      boxAnswer.push(correctAnswers.value);
    }
  });
  if(boxAnswer.length === 4){
    alert("Endast 3 rätta alternativ i flersvarsfrågan ger poäng!");
    answerButton.remove();
    }else if(boxAnswer.length === 5){
    alert("Endast 3 rätta alternaiv i flersvarsfrågan ger poäng!");
    answerButton.remove();
  }
  else if(correctBox.checked && correctBoxx.checked && correctBoxxx.checked){
    result++;
  }
  if (result <= questionNr * 0.5){
    correctAnswers.innerText = `You scored ${result}/10, that's actually not OK. Please rematch this!`;
    answerButton.remove();
  } else if (result > questionNr * 0.5 && result < questionNr * 0.75){
correctAnswers.style.color = "orange";
correctAnswers.innerText = `You scored ${result}/10, you can do better!`
answerButton.remove();
  } else {
    correctAnswers.style.color = "green";
    correctAnswers.innerText = `You scored ${result}/10. You win, and I might have to adopt you!`
    answerButton.remove();
  }
});







