import React, { useEffect } from 'react';
import './Experience.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBriefcase } from 'react-icons/fa';
import cccLogo from '../../assets/CCC-White.svg'; // Import your logo here
import uic_logo from '../../assets/uic_logo.png'; // Import your logo here
import cognizant from '../../assets/cognizant.svg'; // Import your logo here
import theme_pattern from '../../assets/theme_pattern.png'; // Import your logo here

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="experience" id="experience">
      <h2 className="experience-title" data-aos="fade-up">Experience</h2>
      <VerticalTimeline lineColor="#8000ff">
        <VerticalTimelineElement
          contentStyle={{
            background: '#1e1e1e',
            color: '#fff',
            padding: '30px 40px',            // More padding
            fontSize: '1.2rem',              // Larger base font
            lineHeight: '1.8rem',            // Better spacing for bullets
            borderRadius: '20px'
        }}
        contentArrowStyle={{ borderRight: '7px solid #8000ff' }}
          date="Jan 2025 – May 2025"
          iconStyle={{
            background: 'black', // You want the logo background neutral
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px'
          }}
          icon={<img src={cccLogo} alt="CCC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
        >
          <h3 className="vertical-timeline-element-title">AI/ML Engineer – Capstone (UIC)</h3>
          <h4 className="vertical-timeline-element-subtitle">CCC Intelligent Solutions Inc</h4>
          <p style={{ fontSize: '1.15rem', textAlign: 'justify' }}>• Developed an AI-driven multi-agent system to extract vehicle specifications and pricing from 30+ OEM websites, streamlining post-accident valuation workflows through prompt chaining and NLP-based query understanding using OpenAI GPT-4o.
             <br />• Built a full-stack application with a FastAPI frontend and Python backend, enabling real-time interaction between users and LLM agents for intelligent search, scraping, and markdown summarization.  
             <br />• Implemented scalable scraping agents using Playwright and BeautifulSoup, capable of handling dynamic content, multi-hop navigation, and high-precision data extraction across varied site structures.
             <br />• This reduced the time taken to gather vehicle data from 2 hours to 20 minutes, significantly enhancing operational efficiency and accuracy in post-accident evaluations.
             <br />• Integrated Arize Phoenix for full-stack observability and LLM monitoring, enabling sub-90-second response times while providing visibility into model performance and failure points.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: '#1e1e1e',
            color: '#fff',
            padding: '30px 40px',            // More padding
            fontSize: '1.2rem',              // Larger base font
            lineHeight: '1.8rem',            // Better spacing for bullets
            borderRadius: '20px'
        }}
        contentArrowStyle={{ borderRight: '7px solid #8000ff' }}
          date="Oct 2023 – May 2025"
          iconStyle={{
            background: 'black', // You want the logo background neutral
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px'
          }}
          icon={<img src={uic_logo} alt="Cognizant" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
        >
          <h3 className="vertical-timeline-element-title">Graduate Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Illinois Chicago</h4>
          <p style={{ fontSize: '1.15rem', textAlign: 'justify' }}>• Empowered 150+ students with practical data analysis skills by mentoring them in Excel, Tableau, and Power BI to solve accounting problems in cost analysis, budgeting, and financial reporting.
            <br />• Drove data-informed curriculum adjustments by analyzing course enrollment trends using SQL and Excel, identifying seasonal demand fluctuations.
            <br />• Enabled data-driven decision-making through the creation of interactive dashboards visualizing KPIs like seat fill rates and student load, supporting resource optimization.
            <br />• Contributed to advanced financial research by collaborating with faculty to build a structured text corpus from earnings call transcripts of U.S. public companies.
            <br />• Extracted key financial communication insights by applying NLP techniques (TF-IDF, sentiment analysis, topic modeling) to analyze executive tone and market narratives.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: '#1e1e1e',
            color: '#fff',
            padding: '30px 40px',            // More padding
            fontSize: '1.2rem',              // Larger base font
            lineHeight: '1.8rem',            // Better spacing for bullets
            borderRadius: '20px'
        }}
        contentArrowStyle={{ borderRight: '7px solid #8000ff' }}
          date="Sep 2021 – Jul 2023"
          iconStyle={{
            background: 'black', // You want the logo background neutral
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px'
          }}
          icon={<img src={cognizant} alt="UIC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
        >
          <h3 className="vertical-timeline-element-title">ETL Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Cognizant Technology Solutions Pvt. Ltd. Coimbatore, India</h4>
          <p style={{ fontSize: '1.15rem', textAlign: 'justify' }}>• Enabled data integrity and reporting scalability for Farmers Insurance’s Policy Data Management team by building robust data solutions on Oracle RDBMS to support regulatory, operational, and analytical use cases.
            <br />• Led the development of ETL pipelines in Informatica PowerCenter to automate ingestion and transformation of policy and claims data, reducing revenue leakage through comprehensive source-to-target validations.
            <br />• Partnered cross-functionally with QA, DBAs, and analysts to define business rules, resolve complex data discrepancies, and fine-tune system performance for high-throughput policy transaction systems.
            <br />• Refactored legacy Oracle SQL scripts, achieving over 40% reduction in batch processing times, enhancing nightly job performance and ensuring SLA compliance.
            <br />• Authored technical documentation including data flow diagrams, BRDs, and QA test cases, supporting audit-readiness, system traceability, and compliance with data governance protocols.
            <br />• Performed root cause analysis (RCA) on data integrity issues across staging and production layers, implementing preventive controls that boosted reporting accuracy by 95%.
            <br />• Automated ingestion pipelines using Unix shell scripting and Autosys, eliminating manual interventions and enabling fully autonomous execution in production environments.
            <br />• Drove Agile project execution using Jira sprint boards, managing deliverables across user stories, bug fixes, enhancements, and multi-team deployment timelines.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: '#1e1e1e',
            color: '#fff',
            padding: '30px 40px',            // More padding
            fontSize: '1.2rem',              // Larger base font
            lineHeight: '1.8rem',            // Better spacing for bullets
            borderRadius: '20px'
        }}
        contentArrowStyle={{ borderRight: '7px solid #8000ff' }}
          date="Sep 2021 – Jul 2023"
          iconStyle={{ background: '#8000ff', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Business Intelligence Consultant – Jewelry Retail Analytics</h3>
          <h4 className="vertical-timeline-element-subtitle">Founder of Wanderlust Promotions</h4>
          <p style={{ fontSize: '1.15rem', textAlign: 'justify' }}>Founded and led a data-driven marketing and analytics venture, supporting over ten boutique jewelry retailers across South India. Delivered end-to-end solutions combining business intelligence, automation, and creative strategy. Built interactive dashboards in Excel, Google Sheets, and Tableau to monitor key performance metrics such as CAC, ROAS, CLV, and regional conversion rates. Automated campaign data processing using Python (Pandas, Requests) to integrate insights from Meta Ads Manager, Google Analytics, and Shopify reports. Applied A/B testing and K-Means clustering (Scikit-learn) to segment customers by geography and purchase behavior, optimizing campaign effectiveness. Designed and produced high-impact visual content using Adobe Photoshop, Illustrator, and Premiere Pro—customized for seasonal trends and regional languages. The venture achieved a 3× increase in social media followers, a 35% lift in ad engagement, and a substantial rise in qualified leads and product inquiries.</p>
        </VerticalTimelineElement>

        {/* Add more elements here as needed */}
      </VerticalTimeline>
      
    </div>
  );
};

export default Experience;