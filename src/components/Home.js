import profile from "../assets/profile.jpg"; // add your image in src/assets

function Home() {
  return (
    <section id="home" className="section home">

      <div className="home-container">

        {/* Left Side */}
        <div className="home-text">

          <h2>Hello, I'm 👋</h2>

          <i>
            <h1 >
              Deekshitha Sanapala
            </h1>
          </i>

          <p>
            Aspiring Full Stack Developer and Java Programmer with a passion
            <br />
            for building efficient, responsive, and user-centric applications.
          </p>

          {/* Button Navigates to Projects Section */}
          <a href="projects" className="btn">
            View Projects
          </a>

        </div>

        {/* Right Side */}
        <div className="home-image">
          <img src={profile} alt="profile" />
        </div>

      </div>

    </section>
  );
}

export default Home;