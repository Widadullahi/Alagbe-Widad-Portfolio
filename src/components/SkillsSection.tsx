const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Railway"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Skills
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-lg font-bold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
