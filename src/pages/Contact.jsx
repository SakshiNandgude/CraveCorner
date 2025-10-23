import React from 'react';
import '../styles/Contact.css';
import contactBg from '../assets/contact-bg.png'; // Import image for React

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{ background: `url(${contactBg}) no-repeat center center/cover` }}
    >
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please reach out for any queries or feedback.</p>
        <p>📍 <strong>Address:</strong> 123 CraveCorner Street, Pune, India</p>
        <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
        <p>✉️ <strong>Email:</strong> support@cravecorner.com</p>
      </div>

      <form className="contact-form">
        <label>
          Your Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Your Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Your Message
          <textarea placeholder="Write your message" rows="4"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
