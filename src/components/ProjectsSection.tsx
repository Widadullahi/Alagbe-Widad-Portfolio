import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Developer Community Platform",
    description:
      "A platform where developers share projects, connect with collaborators, and grow their network.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Content Generator",
    description:
      "A web application that generates blog posts and marketing content using AI.",
    tech: ["Next.js", "OpenAI API"],
  },
  {
    title: "Startup Landing Page Builder",
    description:
      "A tool that helps founders quickly generate professional startup landing pages.",
    tech: ["React", "Tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Projects
        </h2>
        <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          10+ Projects Built // 2+ Years Learning // 5+ Technologies Mastered
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-secondary px-2 py-1 font-body text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
