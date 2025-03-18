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
          I'm from Michigan and have always enjoyed exploring new ideas through technology. My desire to become an engineer stems from my curiosity about solving complex problems and building tools that create real-world impact. I'm majoring in Computer Science with a Mathematics minor because I enjoy blending logic with creative thinking. Outside my major, I actively volunteer with VT Seva to support visually challenged students, as giving back to my community is important to me.
          </p>
          <p>
          I'm passionate about developing projects that merge data analysis with intuitive design. I value collaboration, believing that teamwork fuels innovation. My strengths include adaptability, problem-solving, and a strong focus on user experience. One of my favorite quotes is, "The best way to predict the future is to invent it." Above all, I strive to combine technical skills with empathy to create meaningful solutions that make a positive impact.
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences">
        <h2>Experiences</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <img src="/vtseva.png" alt="Experience 1" style={{ height: '100px', objectFit: 'contain' }} />
            <h3>VT Seva Detroit Youth Board</h3>
            <span className="competency">Leadership</span>
            <p>Since joining VT Seva in 2016, I've grown from a youth volunteer to my current role as the National Volunteer Relations Coordinator. In this position, I oversee volunteer engagement across the U.S., ensuring individuals are equipped to make meaningful contributions. I organize and lead orientation sessions to prepare new volunteers, addressing their concerns and helping them navigate their roles. Additionally, I manage volunteer issues, ensuring smooth communication between volunteers and leadership. Recently, I launched the Career Compass Webinar Series, a virtual initiative that connects students with industry professionals to provide insights into various career paths. Through interviews and Q&A sessions, this series has helped hundreds of students explore career opportunities and expand their professional networks. This role has enhanced my leadership skills, allowing me to mentor volunteers, coordinate national initiatives, and expand VT Seva's impact.</p>
          </div>

          <div className="experience-card">
            <img src="/northropgrumman.png" alt="Experience 2" style={{ height: '100px', objectFit: 'contain' }} />
            <h3>Northrop Grumman Internship</h3>
            <span className="competency">Innovation</span>
            <p>During my internship at Northrop Grumman, I worked on two distinct teams, each requiring innovative thinking to address complex challenges. On the DevOps continuous integration team, I managed customer support tickets, ensuring clear communication with submitters to identify pain points and develop effective solutions. I also helped improve the CI/CD pipeline by streamlining code scanning processes using Jenkins.
            <p>In my R&D role, I took the lead in developing a desktop application that leverages LLMs to generate unit tests for Python code. I built a Node.js backend and React/Electron frontend, designing the app with user feedback in mind to ensure practical functionality. To enhance the tool's capabilities, I integrated features like Jenkins interoperability for code scanning during builds and created Python scripts to analyze code dependencies. To further improve testing efficiency, I designed a genetic algorithm to identify code branches and achieve 100% test coverage. This experience sharpened my technical skills and taught me how to translate abstract ideas into practical solutions by collaborating with developers across the company.</p>
            <p>Through these experiences, I've strengthened my leadership, problem-solving, and technical skills, preparing me to tackle complex challenges in future roles.</p></p>
          </div>
        </div>
      </section>
      <section className="honors-plan">
        <h2>Honors Plan Development</h2>
        <div className="smart-goals">
          <div className="goal">
            <p><strong>Goal 1:</strong> Grow my personal leadership skills to help intentionally manage decisions made about my career and relationships.</p>
            <ul>
              <li><strong>Specific:</strong> Improve decision-making by actively reflecting on key career and relationship choices.</li>
              <li><strong>Measurable:</strong> Attend 3 leadership workshops and read 2 leadership books by year-end.</li>
              <li><strong>Achievable:</strong> Dedicate 2 hours weekly for leadership development activities.</li>
              <li><strong>Relevant:</strong> Leadership growth will help in my professional and personal life.</li>
              <li><strong>Time-bound:</strong> Achieve these milestones within 6 months.</li>
            </ul>
          </div>
          <div className="goal">
            <p><strong>Goal 2:</strong> Build a software tool with a regular set of users before graduation.</p>
            <ul>
              <li><strong>Specific:</strong> Develop a tool that addresses a real-world need and maintain 5+ active users.</li>
              <li><strong>Measurable:</strong> Track user engagement metrics with analytics.</li>
              <li><strong>Achievable:</strong> Dedicate 5 hours weekly to development and testing.</li>
              <li><strong>Relevant:</strong> This aligns with my career aspirations in software engineering.</li>
              <li><strong>Time-bound:</strong> Launch a beta version within 12 months.</li>
            </ul>
          </div>
        </div>
        <a href="/competency_assessment.pdf" target="_blank" rel="noopener noreferrer">
          View Competency Worksheet
        </a>
      </section>
    </div>
  );
}