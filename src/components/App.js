import './css/App.css';
import avatarIcon from './assets/img/icon.svg';
import React, {useState} from 'react';

// Components
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

function App() {

  // some api requests...
  let [player, updatePlayer] = useState({
    name: 'Sam',
    currentMoney: 100,
    avatarIcon: avatarIcon,
    previousMoney: 0
  });
  
  return (
    <div className='App'>
      <Header player={player}/>
      <Body player={player} updatePlayer={updatePlayer}/>
      <Footer />
    </div>
  );
}

export default App;
