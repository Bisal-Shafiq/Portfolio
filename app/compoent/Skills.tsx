// Skills.tsx
export default function Skills() {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "Bootstrap", level: 60 },
    { name: "TypeScript", level: 60 },
    { name: "Python", level: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skillsWrapper">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <span className="skillName">{skill.name}</span>
            <div className="bar">
              <div className="level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
