import social from "../assets/social.jpg";
import login from "../assets/login.jpeg"; 
import register from "../assets/register.png"; 
import "./style.css";
import { useNavigate } from 'react-router-dom';


const NavbarHome = () => {
    
    const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="leftnav">
            <div className="leftDiv">
                <img src={social} alt="logo" onClick={() => navigate("/np-social")}/>
            </div>
            <div className="rightDiv">
                <p>FOLLOW ME I FOLLOW YOU</p>
                <span>Your No. 1 Social Network Site</span>
            </div>   
        </div>
        <div className="centernav"><i>Follow Me I Follow You</i></div>
        <div className="rightnav">            
            <button onClick={() => navigate("/np-social/login")}><img src={login}/>Log In</button>                        
            <button onClick={() => navigate("/np-social/register")}><img src={register}/>Register</button>    
        </div>        
    </div>
  )
}

export default NavbarHome
