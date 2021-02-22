'use strict';

// Selecting elements

const score0E1 = document.querySelector('#score--0');
const score0E2 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0E1 = document.getElementById('current--0');
const current0E2 = document.getElementById('current--1');
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1')

let scores,activePlayer,currentScore,playing;

const init = function(){
  scores = [0, 0];
  activePlayer = 0;
 currentScore = 0;
 playing = true;

 score0E1.textContent=0;
 score0E2.textContent=0;
 current0E1.textContent=0;
current0E2.textContent=0;

diceE1.classList.add('hidden');
player0E1.classList.remove('player--winner');
player1E1.classList.remove('player--winner');
player0E1.classList.add('player--active');
player1E1.classList.remove('player--active');

}
init();

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
  currentScore=0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
}
// Rolling dice functionality

btnRoll.addEventListener('click', function(){
  if(playing){
  // Generating random number
  const dice = Math.trunc(Math.random()*6)+1;
  console.log(dice);

  // Displaying dice
  diceE1.classList.remove('hidden');
  diceE1.src =`dice-${dice}.png`

  // Check for Rolled
  if(dice !== 1){
    // Add dice to current score
    currentScore = currentScore + dice;
    
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }

  else{
    // Switch to next player 
   switchPlayer();
  }
}
});

btnHold.addEventListener('click', function() {
  if(playing){
    
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
if(scores[activePlayer] >= 100){
  diceE1.classList.add('hidden');
  playing = false;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

}
else
{
  // switch player
  switchPlayer();
}

})

btnNew.addEventListener('click',init)
