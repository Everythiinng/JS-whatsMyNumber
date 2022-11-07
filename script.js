'use strict';

// console.log(document.querySelector('.message').textContent); // Selecting a class, reading the textContent property of the element.

// document.querySelector('.message').textContent = '🎉Correct Number!'; // Selecting a class, writing the textContent property.
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10; // on the Input element we use the 'value' to manipulate

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
const styleColorWidth = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

// Check functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉Correct Number!');
    styleColorWidth('#60b347', '30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
}); //Event handler is the function inside the listener.

// Again functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  displayScore(score);
  displayNumber('?');

  styleColorWidth('#222', '15rem');
});
