import "./business.css";
import video from "../../assets/video.png";
import { Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";

const Video = () => {
  return (
    <div className="video">
      <div className="image">
        <img src={video} alt="" />
      </div>
      <div className="texted">
        <h3>Videos & Tracks</h3>
        <p>Get your videos & tracks to the right people to improve your exposure to different groups of people</p>
        <Link to="/np-social/register">
          <SignUpButton />        
        </Link>
      </div>
      
    </div>
  )
}

export default Video
