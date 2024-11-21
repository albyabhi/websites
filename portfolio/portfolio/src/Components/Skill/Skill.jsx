import React from 'react';
import './Skill.css'; // Make sure to create this CSS file

const Skill = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material-UI', 'Bootstrap', 'Responsive Web Design', 'User Interface Design'],
    backend: ['Node.js', 'JavaScript (for backend development)', 'MongoDB'],
    database: ['MySQL', 'SQL'],
    tools: ['Git (Version Control)', 'VS Code (Code Editor)', 'Eclipse (IDE)'],
    advancedJava: ['JDBC', 'Hibernate', 'Spring Boot'],
    design: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects'],
    other: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Software Engineering'],
  };

  return (
    <section className="skill-section">
      
      <div className="skill-category">
        <h3>Frontend Development</h3>
        <ul className="skill-list">
          {skills.frontend.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Backend Development</h3>
        <ul className="skill-list">
          {skills.backend.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Database Management</h3>
        <ul className="skill-list">
          {skills.database.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Tools & Technologies</h3>
        <ul className="skill-list">
          {skills.tools.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Advanced Java & Frameworks</h3>
        <ul className="skill-list">
          {skills.advancedJava.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Other Skills</h3>
        <ul className="skill-list">
          {skills.other.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Design & Video Editing</h3>
        <ul className="skill-list">
          {skills.design.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      
    </section>
  );
};

export default Skill;
