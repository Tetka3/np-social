import { useNavigate } from "react-router-dom";
import social from "../assets/social.jpg";
import "./style.css";


const Navbar = () => {
    
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className="leftnav">
            <div className="leftDiv">
                <img src={social} alt="logo" onClick={() => navigate("/np-social")}/>
            </div>
            <div className="rightDiv">
                <p>FOLLOW ME I FOLLOW YOU</p>
                <span>Your No. 1 Social Network Site!</span>
            </div>   
        </div>
        <div className="centernav"></div>
        <div className="rightnav">            
            <button>Coins: </button>
            <button>Member</button>
            <button onClick={() => navigate("/np-social")}>Logout</button>              
        </div>        
    </div>
  )
}

export default Navbar
