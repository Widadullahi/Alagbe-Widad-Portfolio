import { motion } from "framer-motion";
import profileImg from "@/assets/widad-profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,7%)]/90 via-[hsl(220,20%,7%)]/70 to-[hsl(220,20%,7%)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/60 to-transparent" />
      </div>

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(217 91% 55% / 0.4), transparent)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(250 80% 60% / 0.3), transparent)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 px-6 py-20 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm font-medium uppercase tracking-[0.3em] text-[hsl(var(--primary-glow))]"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 font-display text-6xl font-bold leading-[1.1] text-white md:text-8xl"
        >
          Widad<br />
          <span className="gradient-text">Alagbe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 font-body text-lg text-white/70 md:text-xl"
        >
          <span className="font-semibold text-white">MERN Stack Developer</span> — crafting modern, scalable web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/50"
        >
          I design and build fast, responsive web applications using MongoDB, Express.js, React, and Node.js — turning ideas into powerful digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative overflow-hidden rounded-lg px-7 py-3.5 font-body text-sm font-semibold text-white transition-all"
            style={{ background: "var(--gradient-premium)" }}
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(135deg, hsl(250 80% 60%), hsl(280 80% 60%))" }} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="rounded-lg border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:shadow-[0_0_20px_hsl(217_91%_55%/0.15)]"
          >
            Contact Me
          </a>
          <a
            href="/Alagbe_Widad_Resume_CV.pdf"
            download
            className="rounded-lg border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-[hsl(var(--primary))]" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
