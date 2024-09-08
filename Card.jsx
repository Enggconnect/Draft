import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="main-image" src="images/mern.jpeg" alt="Course Image" />
      <div className="announcement">Happy to announce that I am starting a new course on full stack development!</div>
      <div className="time-dot"></div>
      <div className="time-text">2 hours ago</div>
      <div className="username">@aarushicodes</div>
      <div className="name">aarushi vats</div>
      <img className="profile-pic" src="images/A.png" alt="Profile" />
      <div className="follow-button">
        <div className="follow-text">follow</div>
        <div className="follow-bg"></div>
      </div>
      <div className="vertical-line"><img src="images/Vector.svg" alt="" /></div>
      <div className="square-1"><img src="images/dislike.svg" alt="Dislike" /></div>
      <div className="square-2"><img src="images/like.svg" alt="Like" /></div>
      <div className="square-3"><img src="images/Vector (3).svg" alt="Share" /></div>
    </div>
  )
}

export default Card
