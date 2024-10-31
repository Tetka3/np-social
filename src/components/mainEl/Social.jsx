import "./business.css";
import social from "../../assets/network.png";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social">
      <div className="image">
        <img src={social} alt="" />
      </div>
      <div className="texted">
        <h3>Your Social Networks</h3>
        <p>Get likes, shares, views, followers, subscribers and hits accross all networks</p>
        <Link to="/np-social/register"><button>Sign Up Free</button></Link>
      </div>

    </div>
  )
}

export default Social