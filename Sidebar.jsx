import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="saved">Saved</div>
      <div className="study">Study respo</div>
      <div className="newsletters">Newsletters</div>
      <div className="home">Home</div>
      <div className="societies">Societies</div>
      <div className="interactions">Interactions</div>
      <div className="more">More</div>
      <div className="side-menu">
        <div className="menu-icon" style={{ top: '395.99px' }}><img src="./images/more.svg" alt="1" /></div>
        <div className="menu-icon" style={{ top: '261.77px' }}><img src="images/studyrespo.svg" alt="2" /></div>
        <div className="menu-icon" style={{ top: '328.98px' }}><img src="images/news.svg" alt="3" /></div>
        <div className="menu-icon" style={{ top: '127.35px' }}><img src="images/notif.svg" alt="4" /></div>
        <div className="menu-icon" style={{ top: '0px', border: '2px dashed rgba(27, 85, 102, 0.60)' }}><img src="images/home.svg" alt="5" /></div>
        <div className="menu-icon" style={{ top: '194.56px' }}><img src="images/save.svg" alt="6" /></div>
        <div className="menu-icon" style={{ top: '58.37px' }}><img src="images/community.svg" alt="7" /></div>
      </div>
      <div className="profile">
        <div className="profile-bg"></div>
        <img className="profile-img" src="images/icon.png" alt="Profile" />
      </div>
    </div>
  )
}

export default Sidebar
