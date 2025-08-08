import React from 'react';
import '../styles/section.css';

const About = () => (
  <section id="about" className="section">
    <h2 className="section-title">About Me</h2>
  <p className="lead">I'm <strong>Kunal Mahakalkar</strong>, an MCA (Master of Computer Applications) student passionate about full-stack development, cloud-native architectures, and crafting delightful user experiences. I enjoy translating ideas into performant, maintainable software.</p>
    <div className="about-grid">
      <div>
        <h3>Profile</h3>
        <ul className="info-list">
          <li><strong>Location:</strong> Your City</li>
          <li><strong>Email:</strong> you@example.com</li>
          <li><strong>Interests:</strong> System Design, DevOps, Open Source</li>
        </ul>
      </div>
      <div>
        <h3>What I Value</h3>
        <p>Clean architecture, testable code, collaboration, continuous learning, and delivering user-centric solutions that scale.</p>
      </div>
    </div>
  </section>
);

export default About;
