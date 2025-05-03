import React from 'react'
import './Hero.css'
import heroImage from '../../assets/abi_photo.svg'

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={heroImage} alt="" />
            <h1><span>I'm Abilash Sivakumar</span>, data analyst turning complex data into actionable insights.</h1>
            <p>I’m a data analyst and AI practitioner with 5+ years of experience building intelligent systems at the intersection of data engineering, NLP, and generative AI. I specialize in crafting LLM workflows, semantic search, and real-time analytics using tools like Python, SQL, PySpark, LangChain, Tableau, and OpenAI. My work spans healthcare, insurance, and automotive domains—turning messy data into meaningful outcomes.
            </p>
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