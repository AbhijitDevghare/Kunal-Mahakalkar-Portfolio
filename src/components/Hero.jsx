import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="content">
  <h1>Hi, I'm <span className="accent">Amey Jagadale</span></h1>
        <h2 className="subtitle">MCA Student | Aspiring Software Engineer</h2>
        <p className="tagline">I build efficient, scalable web and mobile applications and love solving complex problems with clean code.</p>
        <div className="actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>
      <div className="decor" aria-hidden>
        <div className="circle" />
        <div className="grid" />
      </div>
    </section>
  );
};

export default Hero;
