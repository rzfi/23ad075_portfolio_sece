import './Projects.css'
import chatImage from '../../assets/Chat.png'
import carImage from '../../assets/car.png'

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Application",
      description: "A modern chat application built with advanced AI capabilities for natural conversations",
      image: chatImage,
      tech: ["React", "Node.js", "OpenAI"],
      liveLink: "#",
      github: "#"
    },
    {
      title: "Car Price Prediction System",
      description: "A comprehensive car rental platform with booking and management features",
      image: carImage,
      tech: ["Flutter", "Firebase", "Stripe"],
      liveLink: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-blur-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.sourceLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
