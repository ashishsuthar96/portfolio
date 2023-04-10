import React from 'react'
import Typical from "react-typical";

const Home = () => {
  return (
    <div className='home' id="home">
      <div className="home-left">
        <div className="social">
          <ul>
            <li><a href="https://github.com/ashishsuthar96"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ashish-suthar-76409a20b/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
          </ul>
        </div>
        <div class="name"><p>Hello, I'M <span>Ashish Suthar</span></p></div>
        <div className="text">
          <h1>
            <Typical
              loop={Infinity}
              steps={["Ethusiastic Dev", 3000, "Backend Developer", 3000, "Java Developer", 3000, "React Developer", 3000,]}
              wrapper='p' />
          </h1>
        </div>
        <a className="resume primary-btn" href="#" download>Resume</a>
      </div>
      <div className="home-right"></div>

    </div>
  )
}

export default Home
