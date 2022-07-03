import './css/Avatar.css';
import CountUp from 'react-countup';

function Avatar({name, avatarIcon, currentBalance, previousBalance}) {
    return (
        <div className='Avatar'>
            <div className="avatar__icon">
                <img src={avatarIcon} alt="Avatar icon" />
            </div>
            <div className="avatar__name">
                {name}
                <div className="avatar__currentBalance">
                    <span>Current balance: </span>
                    <CountUp
                        start={previousBalance}
                        end={currentBalance}
                        duration={1}
                        decimals={2}
                        decimal="."
                        prefix='$'
                    ></CountUp>
                </div>
            </div>
        </div>
    );
}

export default Avatar;

