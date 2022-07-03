import './css/Game.css';
import React, {useEffect, useState} from 'react';

// Components
import Controller from './Controller.js';
import PossibleWin from './PossibleWin.js';


function Game({player, updatePlayer}) {

  let [percent, updatePercentChance] = useState(1);
  let [sum, updateSum] = useState(player.currentMoney);

  let possibleWin = +((sum - (sum / 100 * percent))).toFixed(2);

  let [values, updateValues] = useState({previousPossibleWin: 0, possibleWin: possibleWin});

  useEffect(() => {
    updateValues((prev) => {
      return {previousPossibleWin: prev.possibleWin, possibleWin: possibleWin};
    });
  }, [possibleWin]);

  function makeBet() {

    if(!isEnoughMoney()) {
      console.log('You don\'t have enough money ');
      return;
    }

    function getRandomInteger(min, max) {
      return Math.random() * (max - min) + min;
    }

    let bet = sum;
    let winBet = +(possibleWin + sum).toFixed(2);
    let previousMoney = player.currentMoney;

    updatePlayer((prev) => { return {...prev, currentMoney: +(prev.currentMoney -= bet).toFixed(2), previousMoney: prev.currentMoney} });

    console.log(player);

    let chanceOfWinning = percent * 10000;

    if(chanceOfWinning >= getRandomInteger(0, 1000000)) {
      console.log('Win');
      updatePlayer((prev) => { return {...prev, currentMoney: +(prev.currentMoney += winBet).toFixed(2), previousMoney: previousMoney} });
    } else {
      console.log('Lose');
    }
    console.log('Current balance: ' + player.currentMoney);
  }

  function isEnoughMoney() {
	  return (player.currentMoney - sum >= 0);
  }
  console.log(player)
  return (
    <div className='Game'>
        <Controller
          updateSum={updateSum}
          updatePercentChance={updatePercentChance}
          currentMoney={player.currentMoney}
          currentSum={sum}
          currentPercent={percent}
          makeBet={makeBet}
        />
        <PossibleWin
          possibleWin={values.possibleWin}
          previousPossibleWin={values.previousPossibleWin}
        />
    </div>
  );
}

export default Game;
