import React from 'react'
import { useEffect } from 'react';
const Resume = () => {
    useEffect(() => {
        let list = document.querySelectorAll(".left a");
        console.log(list);
        for (let i = 0; i < list.length; i++) {
             list[i].onclick = function () {
                let j = 0;
                while (j < list.length) {
                    list[j++].className = "list";
                }
                list[i].className = "list active-link";
             };

        }
   }, []);
    return (
        <div className='resume-section' id="resume">
            <h2>Resume</h2>
            <div className="line">
                <div className="u-line"></div>
            </div>
            <div className="main-resume">
                <div className="left">
                    <a href="#first" className="active-link">
                        <b></b>
                        <b></b>
                        <i class="fa-solid fa-graduation-cap"></i> Education</a>
                    <a href="#second">
                        <b></b>
                        <b></b>
                        <i class="fa-solid fa-laptop"></i> Programing Skills</a>
                    <a href="#third">
                        <b></b>
                        <b></b>
                        <i class="fa-solid fa-chart-column "></i> Project</a>
                    <a href="#forth">
                        <b></b>
                        <b></b>
                        <i class="fa-solid fa-clock-rotate-left"></i> Work History</a>

                </div>
                <div class="right">
                    <div id="first">
                        <div class="edu">
                            <div class="edu-name">
                                <p><i class="fa-solid fa-circle-dot"></i> BackEnd Development</p><p class="time">2021-2023</p>
                            </div>
                            <p class="type">Youtube</p></div>
                        <div class="edu">
                            <div class="edu-name">
                                <p><i class="fa-solid fa-circle-dot"></i> Java</p><p class="time">2021-2022</p>
                            </div>
                            <p class="type">Durga Soft</p>
                        </div>
                        <div class="edu">
                            <div class="edu-name"><p><i class="fa-solid fa-circle-dot"></i> Bachelor of Technology</p><p class="time">2015-2019</p>
                            </div>
                            <p class="type">Rajasthan Techincal University</p>
                        </div>
                        <div class="edu">
                            <div class="edu-name"><p><i class="fa-solid fa-circle-dot"></i> Higher Secondary</p><p class="time">2013-2015</p>
                            </div><p class="type">Arihant Vidhya Peeth</p>
                        </div>
                        <div class="edu">
                            <div class="edu-name"><p><i class="fa-solid fa-circle-dot"></i> Secondary</p><p class="time">2013</p>
                            </div>
                            <p class="type">Arihant Vidhya Peeth</p>
                        </div>
                    </div>
                    <div id="second">
                        <div className="skill">
                            <p>
                                <i class="fa-solid fa-circle-dot"></i> Java
                            </p>
                            <div className="p-bar">
                                <div style={{ width: "80%" }} className="react"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>
                                <i class="fa-solid fa-circle-dot"></i> SpringBoot
                            </p>
                            <div className="p-bar">
                                <div style={{ width: "60%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>
                                <i class="fa-solid fa-circle-dot"></i> Javascript
                            </p>
                            <div className="p-bar">
                                <div style={{ width: "60%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>
                                <i class="fa-solid fa-circle-dot"></i> React
                            </p>
                            <div className="p-bar">
                                <div style={{ width: "70%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>
                                <i class="fa-solid fa-circle-dot"></i> Hibernate
                            </p>
                            <div className="p-bar">
                                <div style={{ width: "50%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div id="third">
                        <div className="edu">
                            <div className="edu-name">
                                <p>
                                    <i class="fa-solid fa-circle-dot"></i> React Portfollio Website
                                </p>
                                <p className="time">2023</p>
                            </div>
                            <p className="type">React Js, Html, Css, Js</p>
                        </div>
                        <div className="edu">
                            <div className="edu-name">
                                <p>
                                    <i class="fa-solid fa-circle-dot"></i> E-commerce website with cart feature
                                </p>
                                <p className="time">2023</p>
                            </div>
                            <p className="type">React Js, SpringBoot, Material Ui</p>
                        </div>
                        <div className="edu">
                            <div className="edu-name">
                                <p>
                                    <i class="fa-solid fa-circle-dot"></i> weather app using Api
                                </p>
                                <p className="time">2022</p>
                            </div>
                            <p className="type">React Js, API, HTml, Css, Js</p>
                        </div>
                        <div className="edu">
                            <div className="edu-name">
                                <p>
                                    <i class="fa-solid fa-circle-dot"></i> Ipl DashBoard
                                </p>
                                <p className="time">2022</p>
                            </div>
                            <p className="type">React Js, SpringBoot</p>
                        </div>
                    </div>
                    <div id="forth">
                        <div className="edu">
                            <div className="edu-name">
                                <p>
                                    <i class="fa-solid fa-circle-dot"></i> System Engineer
                                </p>
                                <p className="time">2021- present</p>
                            </div>
                            <p className="type">Infosys</p>
                            <p>Role : Release Deployment Support</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume
