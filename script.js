'use strict';

console.log(document.querySelector('.message').textContent); // Selecting a class, reading the textContent property of the element.

document.querySelector('.message').textContent = '🎉Correct Number!'; // Selecting a class, writing the textContent property.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10; // on the Input element we use the 'value' to manipulate
