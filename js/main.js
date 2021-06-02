const GAME_TIME = 10;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordDisplay = document.querySelector("#word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const button = document.querySelector(".button");

// 단어를 랜덤으로 선택
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerText = words[randomIndex];
}

function setWordInput(state) {
  if (state) {
    wordInput.disabled = true;
    wordInput.placeholder = "게임시작 버튼을 눌러주세요";
  } else {
    wordInput.disabled = false;
    wordInput.placeholder = "";
  }
}

// 버튼의 html class를 조작해서 게임 상태별로 버튼의 CSS를 바꾸기
function setButton(text) {
  button.innerText = text;
  if (text === "게임시작") {
    button.classList.remove("loading");
    button.classList.add("waiting");
  } else if (text === "게임중") {
    button.classList.remove("waiting");
    button.classList.add("loading");
    setWordInput(false);
    wordInput.focus();
  } else {
    button.classList.remove("waiting");
    button.classList.add("loading");
    setWordInput(true);
  }
}

// 게임 상태를 감지
function checkStatus() {
  if (!isPlaying && time === 0) {
    wordInput.disabled = true;
    wordInput.value = "";
    wordInput.placeholder = "게임시작 버튼을 눌러주세요";
    setButton("게임시작");
    clearInterval(checkInterval);
  }
}

// 외부 API로 랜덤한 단어 불러오기
async function getWords() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=100"
  );
  if (response.ok) {
    const json = await response.json();
    json.forEach(word => {
      if (word.length < 10) {
        words.push(word);
      }
    });
    setButton("게임시작");
    getRandomWord();
  } else {
    alert(`Random Words Loading is Failed`);
  }
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
    getRandomWord();
  }
}

function setCountDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    timeDisplay.classList.remove("redzone");
    clearInterval(timeInterval);
  }
  if (4 > time && time > 0) {
    timeDisplay.classList.add("redzone");
  }
  timeDisplay.innerText = time;
}

// 게임 실행
function run() {
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  time = GAME_TIME;
  score = 0;
  scoreDisplay.innerText = score;
  timeInterval = setInterval(setCountDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  setButton("게임중");
}

// 프로그램 실행 시 초기화하는 함수
(function init() {
  setButton("게임로딩중");
  getWords();
  wordInput.addEventListener("input", checkMatch);
})();
