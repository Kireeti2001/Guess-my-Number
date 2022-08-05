'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

//document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = '😡 NO Number';
  }

  //guess is correct
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '👌 Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //using terminary operator to combine low and high
  else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? '👆Too High' : '👇Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost the Game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//guess too high
//   else if (guess > secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👆Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You Lost the Game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //guess too low
//   else if (guess < secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👇Too lows';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You Lost the Game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
