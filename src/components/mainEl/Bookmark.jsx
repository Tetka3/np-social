import "./business.css";
import { Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";

const Bookmark = () => {
  return (
    <div className='bookmark'>
      <h3>Likes, Shares & Bookmarks</h3><br></br> 
      <p>Why do you need likes and shares? Social media currently plays a major role in boosting your SEO. When you increase your social network, yousimply increase your social presence. You can rely on us for likes and shares. </p><br></br>
      <Link to="/np-social/register">
        <SignUpButton />        
      </Link>
    </div>
  )
}

export default Bookmark
