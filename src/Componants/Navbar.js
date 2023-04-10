import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className="logo">ASuthar<span>.</span></h1>
            <div className="nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#project">Projects</a>
                <a href="#home">Testimonial</a>
                <a href="#contact">ContactMe</a>
            </div>
        </div>
    )
}

export default Navbar
