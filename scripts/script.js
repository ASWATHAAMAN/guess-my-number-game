`use strict`;
// select elements:

const btnAgainEl = document.getElementById(`btn-again`);
const btnCheckEl = document.getElementById(`btn-check`);
const guessInputEl = document.getElementById(`guess-input`);
const displayBoxEl = document.getElementById(`display-box`);
const messageEl = document.getElementById(`message`);
const scoreEl = document.getElementById(`score`);
const highScoreEl = document.getElementById(`high-score`);

// global variables
let score = 10;
let highScore;

// functions
// generate a random number 1 to 100
const getRandomNumber = function () {
  return Math.trunc(Math.random() * 100 + 1);
};
const randomNumber = getRandomNumber();

// eventListeners
// generate a valid user input
btnCheckEl.addEventListener(`click`, () => {
  const guessInput = Number(guessInputEl.value);
  // console.log(guessInput);
  if (guessInput > 0 && guessInput <= 100) {
    if (score > 0) {
      if (guessInput === randomNumber) {
        messageEl.innerText = `YOU WIN`;
        highScoreEl.innerText = `HighScore: ${score}`;
        document.body.style.backgroundColor = `green`;
        messageEl.innerText = `correct number`;
        displayBoxEl.innerText = randomNumber;
        guessInputEl.style.backgroundColor = ` #fff`;
      } else if (guessInput > randomNumber) {
        messageEl.innerText = `TOO HIGH`;
        score = score - 1;
        scoreEl.innerText = `score: ${score}`;
      } else if (guessInput < randomNumber) {
        messageEl.innerText = `TOO LOW`;
        score = score - 1;
        scoreEl.innerText = `score: ${score}`;
      }
    } else {
      console.log(`GAME OVER`);
      document.body.style.backgroundColor = `red`;
      messageEl.innerText = `You Lost the Game`;
      guessInputEl.style.backgroundColor = ` #fff`;
      scoreEl.innerText = `score: ${score}`;
    }
  } else {
    console.log(`Enter a Valid Input`);
  }
});

btnAgainEl.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `#333333`;
  guessInputEl.value = ``;
  displayBoxEl.innerText = `?`;
  messageEl.innerText = `Start guessing...`;
  scoreEl.innerText = `score: 0`;
});

// initial settings
