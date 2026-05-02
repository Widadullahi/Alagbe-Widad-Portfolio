import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-8 right-[-6rem] h-56 w-56 rounded-full bg-slate-200/40 blur-3xl" />
      </div>

      <div className="relative px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            Selected web projects across business, education, e-commerce, and community platforms.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/55 p-6 transition-all hover:-translate-y-1 hover:border-primary/20"
              style={{ boxShadow: "0 14px 32px -24px hsl(220 20% 10% / 0.16)" }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
              <div className="absolute inset-0 bg-white/30" />

              <div className="flex items-start justify-between gap-4">
                <span className="relative rounded-full border border-white/50 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </span>
                <ArrowUpRight className="relative mt-1 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="relative mt-5 font-heading text-xl font-bold text-foreground">
                {project.title}
              </h3>

              <p className="relative mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.highlight ? (
                <p className="relative mt-4 rounded-2xl border border-white/45 bg-white/55 px-4 py-3 text-sm text-foreground/85">
                  {project.highlight}
                </p>
              ) : null}

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/50 bg-white/55 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
