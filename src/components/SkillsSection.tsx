import { motion } from "framer-motion";
import { skillGroups, stats } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Skills and stats
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            What I bring to a project
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            I work across the product stack, with a focus on clean interfaces, dependable APIs, and launch-ready delivery.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-display text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-heading text-lg font-bold text-foreground">{group.title}</h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-primary" />
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
