import profileImg from "@/assets/widad-profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* Background image - blurred */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={profileImg}
          alt=""
          className="h-full w-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 px-6 py-20 lg:px-16">
        <h1 className="font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl">
          Widad Alagbe
        </h1>
        <p className="mt-4 font-body text-xl text-muted-foreground md:text-2xl">
          I'm a <span className="text-primary">Full-Stack Developer</span>
        </p>
        <p className="mt-4 max-w-lg font-body text-base text-muted-foreground">
          I design and build fast, scalable web applications that solve real problems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="rounded-md border border-border px-6 py-3 font-body text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
