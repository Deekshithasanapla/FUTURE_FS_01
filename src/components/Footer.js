import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Deekshitha</h2>

      <p>
        Java Programmer & Full Stack Developer
      </p>

      <div className="footer-icons">

        {/* GitHub */}
        <a
          href="https://github.com/Deekshithasanapla"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/deekshitha-sanapala-a4a9763a7"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/deekshithasanapala10/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      <p className="copyright">
        © 2026 Deekshitha. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;