import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Message Sent Successfully");

      // Clear Form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error Sending Message");
    }
  };

  return (
    <section id="contact" className="section">

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            I’m always interested in new opportunities,
            collaborations, and innovative projects.
            Feel free to connect with me.
          </p>

          <div className="contact-details">

            {/* Email (Clickable but same look) */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a
                href="mailto:deekshithasanapala@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span>deekshithasanapala@gmail.com</span>
              </a>
            </div>

            {/* Phone (Clickable but same look) */}
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a
                href="tel:+917569119574"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span>+91 7569119574</span>
              </a>
            </div>

            {/* Location */}
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>India</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="contact-socials">

            <a
              href="https://github.com/Deekshithasanapla"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
<a
  href="https://www.linkedin.com/in/deekshitha-sanapala-a4a9763a7"
  target="_blank"
  rel="noreferrer"
>
  <FaLinkedin />
</a>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="contact-form-box">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;