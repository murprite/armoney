import './css/Body.css';
import Game from './Game.js';

function Body({player, updatePlayer}) {
  return (
    <section className='Body'>
        <Game player={player} updatePlayer={updatePlayer}/>
    </section>
  );
}

export default Body;
