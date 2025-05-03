import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/about_photo.jpg'
import python from '../../assets/python.png'
import pandas_l from '../../assets/pandas.svg'
import numpy_l from '../../assets/numpy.svg'
import scikit_l from '../../assets/scikit.svg'
import Tensorflow_l from '../../assets/Tensorflow_logo.svg'
import pytorch_l from '../../assets/pytorch.svg'
import SQL_l from '../../assets/SQL.svg'
import GCP_l from '../../assets/GCP.png'
import hadoop_l from '../../assets/Hadoop.png'
import spark_l from '../../assets/Apache_Spark_logo.svg'

const About = () => {
  return (
    <div id='about' className='about' data-aos="fade-up">
      {/* About Title */}
      <div className="about-title" data-aos="fade-up" data-aos-delay="100">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* About Sections */}
      <div className="about-sections">

        {/* Left (Profile Photo) */}
        <div className="about-left" data-aos="fade-up" data-aos-delay="200">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right (Text Paragraph) */}
        <div className="about-right" data-aos="fade-up" data-aos-delay="300">
          <div className="about-para">
            <p>Hi 👋</p>
            <p>I am an AI/ML Engineer with a strong foundation in data engineering and business intelligence. Possesses 6+ years of experience in designing, developing, and deploying scalable AI solutions, including expertise in machine learning, NLP, and Generative AI.  Proficient in a wide range of technologies, including Python, SQL, LangChain, OpenAI, vector similarity search, and multi-cloud platforms.  Experience in building ETL pipelines using Informatica PowerCenter and developing full-stack applications.  Proven ability to analyze complex datasets, extract key insights, and communicate findings through data visualizations using Tableau and Power BI.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="about-skills" data-aos="fade-up" data-aos-delay="400">
          <h2>Tech Stack</h2>

          <div className="skills-grid">

            {/* Skills - staggered animation */}
            <div className="skill-item" data-aos="fade-up" data-aos-delay="500">
              <img src={python} alt="Python" />
              <span className="skill-tooltip">Python</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="550">
              <img src={pandas_l} alt="Pandas" />
              <span className="skill-tooltip">Pandas</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="600">
              <img src={numpy_l} alt="NumPy" />
              <span className="skill-tooltip">NumPy</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="650">
              <img src={scikit_l} alt="Scikit Learn" />
              <span className="skill-tooltip">Scikit Learn</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="700">
              <img src={Tensorflow_l} alt="TensorFlow" />
              <span className="skill-tooltip">TensorFlow</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="750">
              <img src={pytorch_l} alt="PyTorch" />
              <span className="skill-tooltip">PyTorch</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="800">
              <img src={SQL_l} alt="SQL" />
              <span className="skill-tooltip">SQL</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="850">
              <img src={GCP_l} alt="GCP" />
              <span className="skill-tooltip">GCP</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="900">
              <img src={hadoop_l} alt="Hadoop" />
              <span className="skill-tooltip">Hadoop</span>
            </div>

            <div className="skill-item" data-aos="fade-up" data-aos-delay="950">
              <img src={spark_l} alt="Apache Spark" />
              <span className="skill-tooltip">Apache Spark</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
