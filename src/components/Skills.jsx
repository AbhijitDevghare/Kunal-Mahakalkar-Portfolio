import React from 'react';
import '../styles/skills.css';

const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'C++']
  },
  {
    title: 'Frontend',
    items: ['React', 'Redux / Zustand', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL (basic)', 'JWT Auth']
  },
  {
    title: 'Databases / Storage',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
  },
  {
    title: 'DevOps & Tools',
    items: ['Git & GitHub', 'Docker', 'CI/CD (GitHub Actions)', 'Linux', 'NGINX']
  },
  {
    title: 'Cloud & Platforms',
    items: ['AWS (EC2, S3, Lambda basics)', 'Vercel', 'Netlify']
  },
  {
    title: 'Other',
    items: ['Data Structures & Algorithms', 'OOP', 'Agile', 'Unit Testing (Jest)', 'Problem Solving']
  }
];

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Technical Skills</h2>
    <div className="skills-grid">
      {skillCategories.map(cat => (
        <div key={cat.title} className="skill-card">
          <h3>{cat.title}</h3>
          <ul>
            {cat.items.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
