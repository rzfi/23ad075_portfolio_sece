import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Flutter', level: 50 },
    { name: 'Python', level: 60 },
    { name: 'Data Science', level: 70 },
    { name: 'Machine Learning', level: 30 },
    { name: 'Figma', level: 40 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
