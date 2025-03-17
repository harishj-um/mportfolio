import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Harish Jaisankar</h1>
        <h2>Michigan Engineering Honors | M-Portfolio</h2>
        <h3>BSE Computer Science 2026 | Minors in Mathematics & Multidisciplinary Design</h3>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="/NewHeadshot.png" alt="Harish Jaisankar" className="profile-pic" />
          <p>
            I am a dedicated Computer Science and Mathematics student at the University of Michigan with a passion for problem-solving, leadership, and creating impactful solutions. My experiences range from research in mathematics to developing tech solutions in professional environments.
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences">
        <h2>Experiences</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <img src="/path-to-image1.jpg" alt="Experience 1" />
            <h3>VT Seva Detroit Youth Board</h3>
            <span className="competency">Leadership</span>
            <p>Founded and grew the youth board to empower youth volunteers in leadership roles.</p>
          </div>

          <div className="experience-card">
            <img src="/path-to-image2.jpg" alt="Experience 2" />
            <h3>Northrop Grumman Internship</h3>
            <span className="competency">Innovation</span>
            <p>Worked on DevOps integration and led development on an LLM-powered test generation tool.</p>
          </div>
        </div>
      </section>

      {/* Honors Plan Development Section */}
      <section className="honors-plan">
        <h2>Honors Plan Development</h2>
        <div className="smart-goals">
          <p><strong>Goal 1:</strong> Develop and deploy a sentiment analysis dashboard with automated updates.</p>
          <p><strong>Goal 2:</strong> Build a conversational AI assistant to automate approval processes.</p>
        </div>
        <a href="/path-to-competency-worksheet.pdf" target="_blank" rel="noopener noreferrer">
          View Competency Worksheet
        </a>
      </section>
    </div>
  );
}