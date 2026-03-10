import { motion } from "framer-motion";
import profileImg from "@/assets/widad-profile.png";

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
            About Me
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Get to know me
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col items-start gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <img
              src={profileImg}
              alt="Widad Alagbe"
              className="h-72 w-72 rounded-2xl border-2 border-border object-cover"
              style={{ boxShadow: "var(--shadow-premium)" }}
            />
            <div className="absolute -bottom-3 -right-3 rounded-xl bg-primary px-4 py-2">
              <p className="font-heading text-xs font-bold text-primary-foreground">4+ Years Exp.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 font-body text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I'm a <span className="font-semibold text-foreground">MERN Stack Developer</span> with 4+ years of hands-on experience building responsive, user-friendly web applications using React, Node.js, Express.js, and MongoDB. I specialize in designing RESTful APIs, integrating frontend and backend systems, and deploying production-ready applications.
            </p>
            <p>
              I enjoy turning ideas into scalable, maintainable software solutions. From client-facing websites to complex management systems and interactive games, I bring a detail-oriented approach to every project I build.
            </p>
            <p>
              Based in <span className="font-semibold text-foreground">Lagos, Nigeria</span> — I'm constantly learning, building, and pushing the boundaries of what's possible on the web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
