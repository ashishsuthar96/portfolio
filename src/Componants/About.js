import React from 'react'
import img from '../img/Website Creator-amico.png'

const About = () => {
  return (
    <div className='about' id="about">
      <h2>About Me</h2>
      <p>Why Choose Me?</p>
      <div className="line">
        <div className="u-line"> </div>
      </div>
      <div className="about-section">
        <div className="img-section">
          <img src={img} alt="" />
        </div>
        <div className="about-text">
          <div className="text-section">
           Backend Developer and fullStack Developer with Latest Technology Java, SpringBoot, Javascript, React Js (React-Redux, React-Router), along with a knack of building applications with utmost efficiency.
          </div>
          <div className="highlight">
            <ul>
              <li><span><i className="fa-sharp fa-solid fa-circle-dot"></i></span>BackEnd Developer</li>
              <li><span><i className="fa-sharp fa-solid fa-circle-dot"></i></span>SpringBoot</li>
              <li><span><i className="fa-sharp fa-solid fa-circle-dot"></i></span>React all feature</li>
              <li><span><i className="fa-sharp fa-solid fa-circle-dot"></i></span>Redux for State Management</li>
            </ul>
          </div>
          <div className="about-btn">
            <a className="rs secondary-btn" href="images\Pitam Das Resume.pdf" download>Resume</a>
            <a href="#contact" className="hire-me secondary-btn">Hire Me</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
