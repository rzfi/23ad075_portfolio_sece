import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-card">
              <div className="tech-animation">
                
                <div className="floating-elements">
                  <div className="element html">&lt;/&gt;</div>
                  <div className="element css">{'{}'}</div>
                  <div className="element js">JS</div>
                  <div className="element react">⚛️</div>
                  <div className="element flutter">F</div>
                  <div className="element python">Py</div>
                </div>
                <div className="connecting-lines">
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                </div>
              </div>
              <div className="tech-stack">
                <div className="tech-item flutter">
                  <i className="devicon-flutter-plain colored"></i>
                  <span>Flutter</span>
                </div>
                <div className="tech-item python">
                  <i className="devicon-python-plain colored"></i>
                  <span>Python</span>
                </div>
                <div className="tech-item react">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I am a passionate Flutter Developer with a strong foundation in mobile app development
              and data science. I love creating elegant mobile applications and exploring the possibilities
              of machine learning and data analysis.
            </p>
            
            <h3>Certifications</h3>
            <p>
              I have completed various programming courses on Udemy, including:
              <ul className="certification-list">
                <li>Flutter Development</li>
                <li>Dart Programming</li>
                <li>Java Programming</li>
                <li>React.js Development</li>
              </ul>
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>4+</h4>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
