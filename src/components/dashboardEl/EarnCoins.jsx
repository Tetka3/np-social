import "./links.css";
import arrow from '../../assets/arrow.png';

const EarnCoins = ({ onAdd }) => {  

  return (
    <div className='earnCoins' onClick={onAdd}>
      <p>Earn Coins</p>
      <img src={arrow} className="arrow"/>
    </div>
  )
}

export default EarnCoins;
