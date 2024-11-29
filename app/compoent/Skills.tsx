export default function Skills() {
  const skills = [
    { name: "HTML", level: 80, logo: "/html.png" },
    { name: "CSS", level: 75, logo: "/css.png" },
    { name: "Bootstrap", level: 60, logo: "/bootstrap.png" },
    { name: "TypeScript", level: 60, logo: "/ts.png" },
    { name: "Python", level: 70, logo: "/python.png" },
    { name: "Tailwind", level: 60, logo: "/tailwind.png" },
    { name: "Next JS", level: 50, logo: "/nextjs.png" }
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
            <img src={skill.logo} alt={`${skill.name} logo`} className="skillLogo" />
          </div>
        ))}
      </div>
    </section>
  );
}
