import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaLightbulb
} from "react-icons/fa";

function About() {
  return (
    <section className="section about-section">

      <div className="about-container">

        {/* Heading */}
        <div className="about-header">

          <h1>About Me</h1>

          <p>
            Passionate about technology, problem solving,
            and building impactful digital experiences.
          </p>

        </div>

        {/* Main About Card */}
        <div className="about-main-card">

          <div className="about-content">

            <h2>Hello, I'm Deekshitha 👋</h2>

            <p>
              I am an aspiring Full Stack Developer and Java Programmer
              currently pursuing B.Tech in Computer Science Engineering.
              I enjoy creating responsive web applications and continuously
              improving my programming and development skills.
            </p>

            <p>
              My interests include frontend development, Java programming,
              competitive coding, and modern web technologies.
              I am passionate about learning new tools and building
              projects that solve real-world problems.
            </p>

          </div>

        </div>

        {/* Professional Cards */}
        <div className="about-grid">

          {/* Education */}
          <div className="about-card">

            <div className="about-icon">
              <FaGraduationCap />
            </div>

            <h3>Education</h3>
<p>
  Pursuing B.Tech in Computer Science Engineering (CSE)
  with interest in software development and web technologies.
</p>

          </div>

          {/* Coding */}
          <div className="about-card">

            <div className="about-icon">
              <FaCode />
            </div>

            <h3>Problem Solving</h3>

<p>
  Solving problems on CodeChef , HackerRank and geeksforgeeks to improve
  programming, logical thinking, and DSA skills.
</p>

          </div>

          {/* Development */}
          <div className="about-card">

            <div className="about-icon">
              <FaLaptopCode />
            </div>

            <h3>Development</h3>

<p>
  Skilled in Java, HTML, CSS, JavaScript,
  and React.js for building responsive web applications.
</p>

          </div>

          {/* Goals */}
          <div className="about-card">

            <div className="about-icon">
              <FaLightbulb />
            </div>

            <h3>Career Goals</h3>

<p>
  Focused on becoming a skilled Full Stack Developer
  through continuous learning and project building.
</p>

          </div>

        </div>

        {/* Skills */}
        <div className="skills-section">

          <h2>Technical Skills</h2>

          <div className="skills">

            <span>Java</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Git & GitHub</span>
            <span>Responsive Design</span>
            <span>Problem Solving</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;