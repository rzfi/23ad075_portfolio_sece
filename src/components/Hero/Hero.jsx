import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm<br />
              <span className="highlight">Mohammed<br />Rafi H</span>
            </h1>
            <p className="hero-subtitle">Flutter Developer</p>
            <p className="hero-description">
              I specialize in building beautiful and functional mobile applications using Flutter and exploring the realms of Data Science and Machine Learning
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="tech-card">
            <div className="tech-header">
              <div className="tech-title">
                <span className="tech-icon">👨‍💻</span>
                <h3>Tech Stack</h3>
              </div>
            </div>
            <div className="tech-content">
              <div className="tech-section">
                <h4>Primary Skills</h4>
                <div className="tech-pills">
                  <span className="tech-pill flutter">Flutter</span>
                  <span className="tech-pill dart">Dart</span>
                  <span className="tech-pill firebase">Firebase</span>
                </div>
              </div>
              
              <div className="tech-section">
                <h4>Other Technologies</h4>
                <div className="tech-pills">
                  <span className="tech-pill python">Python</span>
                  <span className="tech-pill react">React</span>
                  <span className="tech-pill js">JavaScript</span>
                </div>
              </div>
              
              <div className="tech-section">
                <h4>Interests</h4>
                <div className="tech-pills">
                  <span className="tech-pill">Mobile Dev</span>
                  <span className="tech-pill">ML/AI</span>
                  <span className="tech-pill">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
