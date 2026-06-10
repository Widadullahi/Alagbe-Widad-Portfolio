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

        <div className="mt-14 space-y-6">
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
              className="group block text-left transition-colors hover:text-primary"
            >
              <h3 className="mt-2 text-2xl font-bold text-primary underline decoration-primary/40 underline-offset-2">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              {project.highlight ? (
                <p className="mt-3 text-sm text-foreground/80">{project.highlight}</p>
              ) : null}
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Technologies:</p>
              <p className="text-sm text-muted-foreground">{project.tech.join(" · ")}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
