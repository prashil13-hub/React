import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="left">
                    <span className="logo">lamaAdmin</span>
                </div>
                <div className="right">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://wallpapercave.com/uwp/uwp580690.jpeg" alt="" className="imgAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar