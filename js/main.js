const GAME_TIME = 7;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

function randomWordPick() {
  const randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerText = words[randomIndex];
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange("게임시작");
    clearInterval(checkInterval);
  }
}
function buttonChange(text) {
  button.innerText = text;
  if (text === "게임시작") {
    button.classList.remove("loading");
  } else {
    button.classList.add("loading");
  }
}

// 단어 불러오기
function getWords() {
  axios
    .get("https://random-word-api.herokuapp.com/word?number=100")
    .then(function (response) {
      // handle success
      response.data.forEach(word => {
        if (word.length < 10) {
          words.push(word.toLowerCase());
        }
      });
      buttonChange("게임시작");
      randomWordPick();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// 단어 일치 체크
function checkMatch() {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    wordInput.value = "";
    if (!isPlaying) {
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = GAME_TIME;
    randomWordPick();
  }
}
init();

// 게임 실행
function run() {
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  time = GAME_TIME;
  wordInput.focus();
  score = 0;
  scoreDisplay.innerText = score;
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange("게임중");
}

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function init() {
  buttonChange("게임로딩중");
  getWords();
  wordInput.addEventListener("input", checkMatch);
}
