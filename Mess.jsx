import React from 'react'
import "./Mess.css"
const Mess = () => {
    return (
        <div className="message">
            <div className="arrow">
                <img src="images/right.svg" alt="Arrow" />
            </div>
            message
            <div className="messagecard">
                <img className="img" src="images/usermess.svg" alt="User Message" />
                <div className="text">
                    hi, it is a ..
                </div>
            </div>
            {/* Repeat message cards as necessary */}
        </div>
    )
}

export default Mess
