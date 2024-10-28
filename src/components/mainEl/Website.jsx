import website from "../../assets/website.png";
import { Link } from "react-router-dom";
import './hero.css'

const Website = () => {
  return (
    <div className='website'>
      <div className="image">
        <img src={website} alt="" />
      </div>
      <div className="texted">
        <h3>Your Website</h3>
        <p>Promote your website accross all major networks and explode your traffic & sales whilst improving SEO</p>
        <Link to="/np-social/register"><button>Sign Up Free</button></Link>
      </div>
       
    </div>
  )
}

export default Website
