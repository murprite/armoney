import './css/Header.css';
import logo from './assets/img/logo.svg';

// Components;
import Nav from './Nav';
import Avatar from './Avatar';

function Header({player}) {
    return (
        <header className='Header'>
            <img src={logo} alt="Logo" />
            <Nav />
            <Avatar
                name={player.name}
                avatarIcon={player.avatarIcon}
                currentBalance={player.currentMoney}
                previousBalance={player.previousMoney}
            />
        </header>
    );
}

export default Header;

