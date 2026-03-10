import profileImg from "@/assets/widad-profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={profileImg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,0%)]/80 via-[hsl(0,0%,0%)]/60 to-transparent" />
      </div>

      <div className="relative z-10 px-6 py-20 lg:px-16">
        <p className="font-body text-sm font-medium uppercase tracking-widest text-[hsl(var(--primary))]">
          Hello, I'm
        </p>
        <h1 className="mt-2 font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
          Widad Alagbe
        </h1>
        <p className="mt-4 font-body text-xl text-white/80 md:text-2xl">
          <span className="text-[hsl(var(--primary))]">MERN Stack Developer</span> building modern, scalable web applications.
        </p>
        <p className="mt-4 max-w-lg font-body text-base text-white/60">
          I design and build fast, responsive web applications using MongoDB, Express.js, React, and Node.js — turning ideas into powerful digital solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="rounded-md bg-[hsl(var(--primary))] px-6 py-3 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="rounded-md border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
          >
            Contact Me
          </a>
          <a
            href="/Alagbe_Widad_Resume_CV.pdf"
            download
            className="rounded-md border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
