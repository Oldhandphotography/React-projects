import React from 'react'
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header flex items-center justify-between pl-2 pr-2">
           
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img
                className="header_logo w-48"
                src="https://www.techadvisor.com/cmsdata/features/3515013/tinder_logo_thumb800.png"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>


        </div>
    )
}

export default Header
