import './css/PossibleWin.css';
import CountUp from 'react-countup';

function PossibleWin({possibleWin, previousPossibleWin}) {
  return (
    <div className='PossibleWin'>
      Possible winning:
      <CountUp
        start={previousPossibleWin}
        end={possibleWin}
        duration={1}
        decimals={2}
        decimal="."
        prefix='$'
      ></CountUp>   
    </div>
  );
}

export default PossibleWin;
