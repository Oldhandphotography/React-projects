import React from 'react'
import "./videofooter.css"
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import InstagramIcon from '@material-ui/icons/Instagram';
import Ticker from 'react-ticker'
function Videofooter({channel,desc,song}) {
    return (
        <div className="Videofooter">
            <div className="videofooter-text">
                <InstagramIcon className="instagram"/>
                <h3>{channel}</h3>
                <p>{desc}</p>
                <div className="videofooter-ticker">
                    <MusicNoteRoundedIcon className="videofooter-icon"/>
                    <Ticker mode="smooth" className="ticker-font">
                        {({index}) =>(
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>

            </div>
        </div>
    )
}

export default Videofooter
