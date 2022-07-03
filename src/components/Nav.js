import './css/Nav.css';

function Nav() {
    let navigationLinks = ['Home', 'About', 'Play', 'Contacts'];
    return (
        <ul className='navList'>
            {navigationLinks.map((val) => 
                <li className='navLink' key={val}>
                    <a href="https://google.com">{val}</a>
                </li>
            )}
        </ul>
    )
}

export default Nav;