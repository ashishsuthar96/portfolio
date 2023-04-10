import React from 'react'
import img1 from '../img/20221225_125210_0000.png'
import img2 from '../img/20221225_125708_0000.png'
import img3 from '../img/20221225_130229_0000.png'

const Projects = () => {
    return (
        <div id='project'>
            <h2>Projects</h2>
            <div className="line">
                <div className="u-line"></div>
            </div>
            <div className="m-project">
                <div className="project-box">
                    <img
                        src={img1}
                        alt=""
                    />
                    <p>Ecommerce website with react-Redux</p>
                    <div className="p-button">
                        <a className="github" href="https://github.com/code-pitam/shopping-cart-feature">
                            Github
                        </a>
                        <a className="live" href="https://ecommerce-website-by-pitam.netlify.app">
                            Live Demo
                        </a>
                    </div>
                </div>
                <div className="project-box">
                    <img
                        src={img2}
                        alt=""
                        srcset=""
                    />
                    <p>Live Weather app with API- React</p>
                    <div className="p-button">
                        <a className="github" href="https://github.com/code-pitam/weather-app">
                            Github
                        </a>
                        <a className="live" href="https://weather-app-by-pitam.netlify.app/">
                            Live Demo
                        </a>
                    </div>
                </div>
                <div className="project-box">
                    <img
                        src={img3}
                        alt=""
                        srcset=""
                    />
                    <p>IPL-DashBoard</p>
                    <div className="p-button">
                        <a className="github" href="https://github.com/ashishsuthar96/IPL-DashBoard">
                            Github
                        </a>
                        <a className="live" href="https://food-delivery-website-by-pitam.netlify.app">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
