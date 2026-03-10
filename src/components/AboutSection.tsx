import profileImg from "@/assets/widad-profile.png";

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          About Me
        </h2>
        <div className="mt-10 flex flex-col items-start gap-10 md:flex-row">
          <img
            src={profileImg}
            alt="Widad Alagbe"
            className="h-64 w-64 flex-shrink-0 rounded-lg border border-border object-cover shadow-md"
          />
          <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a MERN Stack Developer with hands-on experience in building responsive, user-friendly web applications using React, Node.js, Express.js, and MongoDB. I specialize in designing RESTful APIs, integrating frontend and backend systems, and deploying production-ready applications.
            </p>
            <p>
              I enjoy turning ideas into scalable, maintainable software solutions. From client-facing websites to complex management systems and interactive games, I bring a detail-oriented approach to every project I build.
            </p>
            <p>
              Based in Lagos, Nigeria — I'm constantly learning, building, and pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
