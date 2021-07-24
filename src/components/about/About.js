import React from 'react'
import "./About.css";
const About = () => {
    return (
        <div className="about-container"> 
            <div className="about-desc">
                <h3>About me</h3>
                <p>Text</p>
            </div>
            <div className="about-img">
                <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="About" />
            </div>
        </div>
    )
}

export default About
