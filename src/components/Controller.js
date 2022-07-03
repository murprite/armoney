import React from 'react';
import './css/Controller.css';

function Controller({updatePercentChance, updateSum, currentMoney, currentSum, currentPercent, makeBet}) {

	return (
		<div className='Controller'>

			<div className="betWrapper">
				<div className="sumWrapper">
					<label htmlFor="sum">Сумма</label>
					<input type="phone" id='sum' value={currentSum} onChange={(e) => {
						updateSum((prev) => +e.target.value);
					}}/>
					<div className="BetButtons">
						<button onClick={(e) => {updateSum((prev) => prev * 2)}}>Double</button>
						<button onClick={(e) => {updateSum((prev) => Math.round(prev / 2))}}>Half</button>
						<button onClick={(e) => {updateSum((prev) => currentMoney)}}>Max</button>
						<button onClick={(e) => {updateSum((prev) => 1)}}>Min</button>
					</div>
				</div>

				<div className="percentWrapper">
					<label htmlFor="percent">Процент</label>
					<input type="phone" id='percent' value={currentPercent} onChange={(e) => {
						updatePercentChance((prev) => +e.target.value);
					}}/>
					<div className="BetButtons">
						<button onClick={(e) => {updatePercentChance((prev) => (prev * 2 > 95) ? 95 : prev * 2)}}>Double</button>
						<button onClick={(e) => {updatePercentChance((prev) => (prev / 2 <= 1) ? 1 : (prev / 2).toFixed(2))}}>Half</button>
						<button onClick={(e) => {updatePercentChance((prev) => 95)}}>Max</button>
						<button onClick={(e) => {updatePercentChance((prev) => 1)}}>Min</button>
					</div>
				</div>
			</div>
			<div className="makeBet">
				<button className="makeBetBtn" onClick={makeBet}>
					Bet
				</button>
			</div>
		</div>
	);
}

export default Controller;
