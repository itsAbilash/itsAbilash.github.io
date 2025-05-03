import React from 'react';
import './Project.css';
import projectI1 from '../../assets/swot.png';
import projectI2 from '../../assets/toxic.png';
import projectI3 from '../../assets/chatbot.jpg';

const Projects = () => {
  const projectData = [
    {
      title: "Automated Competitor Analysis",
      description: "This project leverages Natural Language Processing (NLP) and semantic similarity to automatically categorize business news articles into SWOT categories — Strengths, Weaknesses, Opportunities, and Threats — and generate contextual summaries using a simple web interface. Thus helping business in launching new products, understanding competitors, and making informed decisions.",
      github: "https://github.com/itsAbilash/automated_swot_news_analysis",
      image: projectI1
    },
    {
      title: "Toxic Comment Classification",
      description: "A machine learning-powered tool that detects and classifies toxic comments—such as insults, threats, and hate speech—using NLP techniques. Built on a dataset of 159K+ online comments, it helps platforms automate moderation and create safer, more respectful digital spaces.",
      github: "https://github.com/itsAbilash/Toxic-Comment-Classification",
      demo: "",
      image: projectI2
    },
    {
      title: "Vehicle Deep Research",
      description: "A multi-agent deep reserch tool that provides detailed information about vehicles, including their specifications, features, and reviews. It uses web scraping with the help of LLM ChatGPT to gather data from various sources and present it in a user-friendly format. This helps insurance companies to get help in post acciedent value estimation.",
      github: "https://github.com/yourusername/ecommerce",
      image: projectI3
    }
    // Add more projects as you want
  ];

  return (
    <div className="projects" id="projects">
      <h2 className="projects-title" data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index} style={{ backgroundImage: `url(${project.image})` }} data-aos="fade-up">
            <div className="project-overlay">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
