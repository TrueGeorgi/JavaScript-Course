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

let isAutoPlaying = false;
let intervalID;

// const autoPlay = () => {};
function autoplay() {
  if (!isAutoPlaying) {
      intervalID = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop';
    
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  document.querySelector('.js-question-reset').innerHTML = 'Are you sure you want to reset the score? <button class="js-confirm-reset">Yes</button><button class="js-reject-reset">No</button>';

  function hidePopUp() {
    document.querySelector('.js-question-reset').innerHTML = '';
  };

  document.querySelector('.js-confirm-reset').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result')
      .innerHTML = '';
    document.querySelector('.js-moves')
      .innerHTML = '';
    updateScoreElement();
    hidePopUp();
  });

  document.querySelector('.js-reject-reset').addEventListener('click', () => {
    hidePopUp();
  });
});





document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoplay();
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoplay();
  }
});

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