import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Form submitted!'); };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{ display: 'block', margin: '10px 0' }}/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" style={{ display: 'block', margin: '10px 0' }}/>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" style={{ display: 'block', margin: '10px 0' }}/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
