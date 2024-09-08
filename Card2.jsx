import React from 'react'
import "./Card2.css"
const Card2 = () => {
  return (
    <div className="card2">
      <div className="prompt">Share your thoughts..</div>
      <div className="upload-button">
        <div className="upload-text">Upload</div>
      </div>
      <div className="square"><img src="images/emoji.svg" alt="Emoji" /></div>
      <div className="upload"><img src="images/image.svg" alt="Upload" /></div>
    </div>
  )
}

export default Card2
