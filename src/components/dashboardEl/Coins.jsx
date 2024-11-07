import "./links.css";
// import "./business.css";
import Monthly from "../coins/Monthly";
import BuyCoins from "../coins/BuyCoins";
import BuyPremium from "../coins/BuyPremium";
import BuyActive from "../coins/BuyActive";
import BuyFeature from "../coins/BuyFeature";
import BuyBulk from "../coins/BuyBulk";
import ReedemCoupon from "../coins/RedeemCoupon";

const Coins = () => {
  return (
    <div className="coined">
        <div className="topCoin">
            <Monthly />
            <BuyCoins />
        </div>
        <div className="centerCoin">
            <BuyPremium/>
            <BuyActive />
        </div>
        <div className="bottomCoin">
            <BuyFeature />
            <BuyBulk />
        </div> 
        <div className="reedemedCoin">
            <ReedemCoupon/>
        </div>     
    </div>
  )
}

export default Coins;
