import React,{useState} from 'react'
import "./videosidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
function Videosidebar({likes=0,shares=0,messages=0,props}) {
    const [liked,setLiked] = useState(false);
    return (
        <div className="videosidebar">
            <div className="love-container" id="container-icons">
                {liked ? (<FavoriteBorderIcon  fontSize="large"  onClick={(e) => setLiked(false)} />):(<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/>
                )}
                
                <p>{liked? likes+1 :likes}</p>
            </div>
            <div className="comment-container" id="container-icons">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="share-container" id="container-icons">
                <ReplyIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Videosidebar
