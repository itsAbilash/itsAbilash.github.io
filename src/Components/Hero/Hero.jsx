import React from 'react'
import './Hero.css'
import heroImage from '../../assets/abi_photo.svg'

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={heroImage} alt="" />
            <h1><span>I'm Abilash Sivakumar</span> <br />Architect of self-evolving AI systems.
            <br />Where raw data becomes strategic foresight.</h1>
            <div className="hero-action">
                <a
                    href="https://drive.google.com/uc?export=download&id=1GQGfqBKpIeFlPR9vA6S2gsTFOp1Cxulh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-resume"
                >
                My Resume
                </a>

                <a href="#contact">
                    <div className="hero-action-btn">Connect With Me</div>
                </a>
            </div>
        </div>
    )
}

export default Hero