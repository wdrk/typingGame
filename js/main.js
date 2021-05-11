let score = 0;
let time = 10;
let isPlaying = false; /* 게임 상태를 관리하는 변수 */

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');

// 화면의 단어와 사용자가 입력한 단어가 같은지 비교해서 동작하는 구간
wordInput.addEventListener('input', () => {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    ++score;
    scoreDisplay.innerText = score;
    wordInput.value = '';
  }
});

// 제한시간 설정
function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  timeDisplay.innerText = time;
}
setInterval(countDown, 1000);
