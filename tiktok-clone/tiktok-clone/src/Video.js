import React ,{useRef,useState} from 'react'
import Videofooter from "./Videofooter.js"
import Videosidebar from "./Videosidebar.js"

import './Video.css';
function Video() {
    const [playing, setPlaying]=useState(false);
    const videoRef = useRef(null);
    const handlevideocontent = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }

    }
    return (
        <div className="video">
            {/* 1st video */}
            <video onClick={handlevideocontent} className="video-player" loop ref={videoRef} src="https://vod-progressive.akamaized.net/exp=1642628642~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2397%2F21%2F536988710%2F2541926369.mp4~hmac=5e56384eaa58387be8d7fd28c100bf142d630a4961c2b3d617b9043bc9d74a86/vimeo-prod-skyfire-std-us/01/2397/21/536988710/2541926369.mp4?filename=pexels-artyom-saqib-7512492.mp4">
               
            </video>
            <Videofooter channel="oldhand_photography"  desc="cat videos"  song="hey melody"/>
            <Videosidebar likes={111} shares={222} messages={200} />
        </div>
    );
}

export default Video
