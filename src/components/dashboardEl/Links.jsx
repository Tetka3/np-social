import "./links.css"
import { Link } from 'react-router-dom'


const Links = () => {
  return (
    <div className='links'>
        <div className="left">            
            <Link to="/np-social/dashboard"><li className='activeLink'>Home</li></Link>
            <Link to="/np-social/dashboard"><li>Add New</li></Link>
            <Link to="/np-social/dashboard"><li>Earn Coins</li></Link>
            <Link to="/np-social/dashboard"><li>Buy Coins</li></Link>            
        </div>
        <div className="center"></div>
        <div className="right">
            <ul>
                <Link to="/np-social/dashboard"><li className='activeLink'>Extras</li></Link>
                <Link to="/np-social/dashboard"><li>Support</li></Link>
                <Link to="/np-social/dashboard"><li>Account</li></Link>
            </ul>
        </div>
      
    </div>
  )
}

export default Links
