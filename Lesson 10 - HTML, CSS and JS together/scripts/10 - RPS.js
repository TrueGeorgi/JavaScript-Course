let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(player) {
const computer = pickComputerMove();
let result = '';

if(player === 'Scissors') {
  if (computer === 'Rock') {
    result = 'You lose';
  } else if (computer === 'Paper') {
    result = 'You win';
  } else if (computer === 'Scissors') {
    result = 'Tie';
  }

} else if (player === 'Paper') {
  if (computer === 'Rock') {
    result = 'You win';
  } else if (computer === 'Paper') {
    result = 'Tie';
  } else if (computer === 'Scissors') {
    result = 'You lose';
  }
  
} else {
  if (computer === 'Rock') {
    result = 'Tie';
  } else if (computer === 'Paper') {
    result = 'You lose';
  } else if (computer === 'Scissors') {
    result = 'You win';
  }
}

if (result === 'You win') {
  score.wins++;
} else if (result === 'You lose') {
  score.losses++;
} else {
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = ` You
<img class="move-image" src="images/${player}-emoji.png" alt="rock-emoji">
<img class="move-image" src="images/${computer}-emoji.png" alt="scissors-emoji">
Computer`;
}

function updateScoreElement () {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickComputerMove () {
let ranodomNumber = 0;
ranodomNumber = Math.random();
let computer = '';

if (ranodomNumber >= 0 && ranodomNumber < 1 / 3) {
  computer = 'Rock';
} else if (ranodomNumber >= 1/3 &&         ranodomNumber < 2 / 3) {
  computer = 'Paper';
} else {
  computer = 'Scissors';
}

return computer;
}