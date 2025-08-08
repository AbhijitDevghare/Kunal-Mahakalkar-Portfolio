import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    // Placeholder: send data to email service or API
    console.log('Contact submit', data);
    setStatus('Message sent (demo)');
    e.target.reset();
    setTimeout(()=> setStatus(''), 3000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="lead">Want to collaborate or have a question? Drop a message.</p>
      <form className="contact-form" onSubmit={submit}>
        <div className="field">
          <label>Name</label>
          <input name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="field full">
          <label>Message</label>
          <textarea name="message" rows={4} required placeholder="How can I help?" />
        </div>
        <button className="btn primary" type="submit">Send</button>
        {status && <span className="status">{status}</span>}
      </form>
      <div className="contact-extra">
        <div><strong>Email:</strong> you@example.com</div>
        <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></div>
        <div><strong>GitHub:</strong> <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">github.com/yourhandle</a></div>
      </div>
    </section>
  );
};

export default Contact;
