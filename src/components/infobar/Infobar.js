import React from 'react'
import './infobar.css'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const Infobar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                 <h2>{room}</h2>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" /></a>

            </div>

        </div>
    )
}
export default Infobar