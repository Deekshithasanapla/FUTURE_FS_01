import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import todo from "../assets/todo.png";
import navbar from "../assets/navbar.png";

function Projects() {
  return (

    <section id="projects" className="section projects-section">

      {/* Heading */}
      <div className="projects-header">

        <h1>Projects</h1>

        <p>
          A collection of projects showcasing my
          frontend development and programming skills.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-image">
            <img src={todo} alt="To Do App" />
          </div>

          <div className="project-content">

            <h2>To-Do List Application</h2>

            <p>
              A responsive task management application
              built using HTML, CSS, JavaScript, and React.js.
            </p>

            <div className="project-tech">

              <span>React.js</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>

            {/* Project Status Buttons */}
            <div className="project-links">

              <button className="project-btn">
                <FaGithub /> Uploading Soon
              </button>

              <button className="project-btn">
                <FaExternalLinkAlt /> In Progress
              </button>

            </div>

          </div>

        </div>

        {/* Project 2 */}
        <div className="project-card">

          <div className="project-image">
            <img src={navbar} alt="Mini Blog Website" />
          </div>

          <div className="project-content">

            <h2>Mini Blog Website</h2>

            <p>
              A modern responsive blog website with
              elegant UI design and responsive layout.
            </p>

            <div className="project-tech">

              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>

            </div>

            {/* Project Status Buttons */}
            <div className="project-links">

              <button className="project-btn">
                <FaGithub /> Uploading Soon
              </button>

              <button className="project-btn">
                <FaExternalLinkAlt /> In Progress
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;