import React from 'react';
import '../styles/education.css';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Your University',
    period: '2024 - 2026',
    details: 'Focus: Full-Stack Development, Cloud Computing, Software Engineering.'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Your College',
    period: '2021 - 2024',
    details: 'Graduated with distinction; coursework in DS&A, DBMS, OS, Networks.'
  }
];

const Education = () => (
  <section id="education" className="section">
    <h2 className="section-title">Education</h2>
    <div className="edu-cards">
      {education.map(e => (
        <div key={e.degree} className="edu-card">
          <h3>{e.degree}</h3>
          <p className="school">{e.school}</p>
          <p className="period">{e.period}</p>
          <p className="details">{e.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
