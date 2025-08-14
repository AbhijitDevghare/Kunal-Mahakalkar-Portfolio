import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
  <a className="brand" href="#home" onClick={close}>Amey Jagadale</a>
        <button aria-label="Menu" className={`burger ${open ? 'open' : ''}`} onClick={toggle}>
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'open' : ''}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
