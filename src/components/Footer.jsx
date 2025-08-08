import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
  <p>&copy; {new Date().getFullYear()} Kunal Mahakalkar. Built with React & Vite.</p>
    </footer>
  );
};

export default Footer;
