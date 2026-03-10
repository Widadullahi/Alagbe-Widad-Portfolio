const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication & Authorization"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Netlify"],
  },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Games Developed" },
  { value: "2+", label: "Years Experience" },
  { value: "7+", label: "Technologies Mastered" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Skills & Stats
        </h2>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-5 text-center shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-lg font-bold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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
