import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import profileImg from "@/assets/widad-profile.png";
import { profile } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={profileImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,7%)]/90 via-[hsl(220,20%,7%)]/70 to-[hsl(220,20%,7%)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/60 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(217 91% 55% / 0.4), transparent)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(190 85% 55% / 0.28), transparent)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 px-6 py-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {profile.availability}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 font-body text-sm font-medium uppercase tracking-[0.3em] text-[hsl(var(--primary-glow))]"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 font-display text-6xl font-bold leading-[1.1] text-white md:text-8xl"
        >
          Widad
          <br />
          <span className="gradient-text">Alagbe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl font-body text-lg text-white/75 md:text-xl"
        >
          <span className="font-semibold text-white">{profile.role}</span> building scalable products for business, education, e-commerce, and community-driven organizations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/55"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70"
        >
          <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2">
            Frontend-focused developer
          </span>
          <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2">
            Backend still improving
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-4 py-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 font-body text-sm font-semibold text-white transition-all"
            style={{ background: "var(--gradient-premium)" }}
          >
            <span className="relative z-10">View my work</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg, hsl(250 80% 60%), hsl(280 80% 60%))" }}
            />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:shadow-[0_0_20px_hsl(217_91%_55%/0.15)]"
          >
            Contact me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 pt-2">
          <div className="h-2 w-1 rounded-full bg-[hsl(var(--primary))]" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
