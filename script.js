'use strict';

//const { Logger } = require('sass');

const reloadBtn = document.querySelector('#again');
reloadBtn.addEventListener('click', () => {
  location.reload();
});

const randomNumber = Math.floor(Math.random() * 20) + 1;

function getVal() {
  const val = document.querySelector('.guess').value;

  var min = randomNumber - 1;
  var max = randomNumber + 1;

  if (val == randomNumber) {
    document.querySelector('.winnerTxt').innerText = 'Winner Winner';
    document.querySelector('.number').innerText = val;
  } else {
    document.querySelector('.winnerTxt').innerText = 'Keep Trying...';
  }
  if (val == randomNumber) {
    document.querySelector('.message').innerText = 'You Rock it.✔';
  } else if (val <= min) {
    document.querySelector('.message').innerText = 'low.🤔';
  } else if (val >= max) {
    document.querySelector('.message').innerText = 'high..🤷‍♂️';
  }
}

const checkBtn = document.querySelector('.check');
var count = 0;
checkBtn.addEventListener('click', function () {
  count = count + 1;
  var sscore = 20 - count;

  var score = (document.querySelector('.score').innerText = sscore);

  getVal();
});
