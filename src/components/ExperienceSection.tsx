import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Experience
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Recent work history
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            A selection of roles where I delivered frontend and full-stack web applications, product improvements, and collaborative development support.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                <Briefcase className="h-4 w-4" />
                <span>{item.period}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{item.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.company} • {item.location}
              </p>
              <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
                {item.highlights.map((highlight) => (
                  <p key={highlight} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    {highlight}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
