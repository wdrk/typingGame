let score = 0;
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');

wordInput.addEventListener('input', () => {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    ++score;
    scoreDisplay.innerText = score;
    wordInput.value = '';
  }
});
