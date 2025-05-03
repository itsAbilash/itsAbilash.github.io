import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import bac from '../../assets/theme_pattern.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e82d1ff-1974-4f65-ad5c-982e80baa671");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading" data-aos="fade-up">
        Get in <span>touch</span>
        <img src={bac} alt="bac" className='paint-background'/>
      </h2>
      <div className="contact-container">
        {/* LEFT - INFO */}
        <div className="contact-info" data-aos="fade-right">
          <h3>Let's <span>talk</span></h3>
          <p>I'm currently open to fulltime positions.</p>
          <div className="contact-details">
            <p><FaEnvelope /> abilashsivakumars@gmail.com</p>
            <p><FaPhoneAlt /> +1-312-358-9687</p>
            <p><FaMapMarkerAlt /> Chicago, IL, USA</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form onSubmit={onSubmit} className="contact-form" data-aos="fade-left">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write your message here" required></textarea>
          <button type="submit">Submit now</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
