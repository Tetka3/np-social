import business from "../../assets/business.png";
import { Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";

const Business = () => {
  return (
    <div className='business'>
      <div className="image">
        <img src={business} alt="" />
      </div>
      <div className="texted">
        <h3>Your Business</h3>
        <p>Grow your business by promoting it to the right people on different major social networks</p>
        <Link to="/np-social/register">
          <SignUpButton />        
        </Link>
      </div>
    </div>
  )
}

export default Business
