import "./links.css";

const EarnCoins = ({ onAdd }) => {  

  return (
    <div className='earnCoins'>
      <button onClick={onAdd}>Earn Coins</button>
    </div>
  )
}

export default EarnCoins;
