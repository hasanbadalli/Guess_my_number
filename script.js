const inp = document.querySelector('.guess');
const btnC = document.querySelector('.check');
const message = document.querySelector('.message');
const btnA = document.querySelector('.again');
const correctNum = document.querySelector('.number');
let score = document.querySelector('.score');
let scoreNum = 20;
let high = document.querySelector('.highscore');
let highscore = 0;

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

btnA.addEventListener('click', () => {
  document.body.style.backgroundColor = '';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = 'Start guessing...';
  correctNum.textContent = '?';
  if (scoreNum > highscore) {
    highscore = scoreNum;
    high.textContent = highscore;
  }
  scoreNum = 20;
  score.textContent = scoreNum;
});

btnC.addEventListener('click', checker);

function checker() {
  num = inp.value;
  if (num > 20) {
    alert('Duzgun araliqda girin');
  } else if (randomNumber == num) {
    message.textContent = 'Correct Number!';
    document.body.style.backgroundColor = 'green';
    correctNum.textContent = num;
  } else if (num > randomNumber) {
    message.textContent = 'Too Hight';
    score.textContent = --scoreNum;
  } else {
    message.textContent = 'Too Low';
    score.textContent = --scoreNum;
  }
}
