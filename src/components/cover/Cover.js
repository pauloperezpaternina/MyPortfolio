import React from 'react'
import "./Cover.css"
import covervideo from "../../media/coverVideo.mp4"
const Cover = () => {
    
    return (
        <div className="cover-container">
            <video className="video" src={covervideo} autoPlay loop muted />
            <h1>Paulo Perez Paternina</h1>
            <p>Developer | Entrepeneur</p>
        </div>
    );
};

export default Cover
