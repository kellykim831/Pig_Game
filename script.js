'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContext = 0;
score1El.textContext = 0;
diceEl.classList.add('hidden');
