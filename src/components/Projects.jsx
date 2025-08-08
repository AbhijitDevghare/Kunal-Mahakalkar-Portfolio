import React from 'react';
import '../styles/projects.css';

const projects = [
  {
    name: 'Campus Connect Platform',
    description: 'Full-stack MERN application enabling students to share resources, events, and collaborate in real time.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io'],
    repo: '#',
    demo: '#'
  },
  {
    name: 'TaskFlow Manager',
    description: 'Productivity web app with Kanban boards, drag & drop tasks, and JWT-based auth.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    repo: '#',
    demo: '#'
  },
  {
    name: 'Algo Visualizer',
    description: 'Interactive visualization tool for common data structures and algorithms used in coding interviews.',
    tech: ['React', 'D3.js'],
    repo: '#',
    demo: '#'
  }
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map(p => (
        <div key={p.name} className="project-card">
          <h3>{p.name}</h3>
            <p className="desc">{p.description}</p>
          <div className="tech-list">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
          <div className="links">
            {p.repo !== '#' && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
            {p.demo !== '#' && <a href={p.demo} target="_blank" rel="noreferrer">Live</a>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
