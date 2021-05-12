const GAME_TIME = 3; /* 남은 시간 시작값 */
let score = 0;
let time = GAME_TIME;
let isPlaying = false; /* 게임 상태를 관리하는 변수 */
let timeInterval; /* interval을 끝낼때 쓰는 변수 */
let checkInterval;
let words = []; /* 화면에 표시할 단어 모음 */

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

const run = () => {
  isPlaying = true;
  time = GAME_TIME;
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
};

const checkStatus = () => {
  if (isPlaying === false && time === 0) {
    buttonChange("게임종료...");
    clearInterval(checkInterval);
  }
};

// 화면의 단어와 사용자가 입력한 단어가 같은지 비교해서 동작하는 함수
const checkMatch = () => {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    wordInput.value = "";
    if (isPlaying === false) {
      return;
    } else {
      ++score;
      scoreDisplay.innerText = score;
      time = GAME_TIME;
      const randomIndex = Math.floor(Math.random() * words.length);
      wordDisplay.innerText = words[randomIndex];
    }
  }
};

const buttonChange = (text) => {
  button.innerText = text;
  text === "게임시작"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
};

// 화면에 표시할 단어 불러오기
const getWords = () => {
  words = ["hello", "banana", "apple", "cherry"];
  buttonChange("게임시작");
};
// 남은시간 설정
const countDown = () => {
  time > 0 ? time-- : (isPlaying = false);
  if (isPlaying === false) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
};

// 초기화
const init = (() => {
  getWords();
  wordInput.addEventListener("input", checkMatch);
})();
