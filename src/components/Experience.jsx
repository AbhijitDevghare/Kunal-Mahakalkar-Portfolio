import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Tech Solutions Pvt Ltd',
    period: 'Jun 2024 - Aug 2024',
    points: [
      'Implemented reusable React components reducing code duplication by 25%',
      'Optimized API calls leading to ~15% faster dashboard load times',
      'Collaborated with backend team to design REST endpoints'
    ]
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Projects',
    period: '2023 - Present',
    points: [
      'Fixed bugs and improved documentation in emerging JS libraries',
      'Participated in code reviews and community discussions'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="section">
    <h2 className="section-title">Experience</h2>
    <div className="timeline">
      {experiences.map(exp => (
        <div key={exp.role + exp.company} className="timeline-item">
          <div className="time-meta">
            <h3>{exp.role}</h3>
            <span className="company">{exp.company}</span>
            <span className="period">{exp.period}</span>
          </div>
          <ul className="points">
            {exp.points.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
