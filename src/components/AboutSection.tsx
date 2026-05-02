import { motion } from "framer-motion";
import { BriefcaseBusiness, Layers3, Sparkles } from "lucide-react";
import profileImg from "@/assets/widad-profile.png";
import { profile } from "@/data/portfolio";

const focusAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Business-minded builds",
    text: "I build products that are clear, useful, and ready for real users, not just demos.",
  },
  {
    icon: Layers3,
    title: "Full-stack execution",
    text: "From frontend experience to backend logic and deployment, I handle the complete workflow.",
  },
  {
    icon: Sparkles,
    title: "Polish and usability",
    text: "I care about clean interfaces, responsive layouts, and details that make products easier to trust.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About me
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Building products with clarity and care
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={profileImg}
              alt="Widad Alagbe"
              className="h-80 w-full rounded-3xl border-2 border-border object-cover"
              style={{ boxShadow: "var(--shadow-premium)" }}
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[hsl(var(--sidebar-background))]/85 p-4 text-white backdrop-blur">
              <p className="font-heading text-lg font-bold">{profile.role}</p>
              <p className="mt-1 text-sm text-white/65">{profile.location}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a <span className="font-semibold text-foreground">{profile.role}</span> with 3+ years of hands-on experience building responsive web applications, especially on the frontend with React and modern UI tools.
              </p>
              <p>
                My work spans e-commerce, education, real estate, community platforms, and interactive web experiences. I&apos;m strongest at creating polished interfaces, responsive layouts, and clear user journeys.
              </p>
              <p>
                {profile.summary}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 * index }}
                  className="rounded-2xl border border-border bg-card p-5"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <area.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
