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
            className="h-64 w-64 flex-shrink-0 rounded-lg border border-border object-cover"
          />
          <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate full-stack developer focused on building modern web applications
              and digital products.
            </p>
            <p>
              I enjoy turning ideas into scalable and user-friendly software solutions. I work
              with technologies like React, Node.js, and modern databases to create fast and
              efficient applications.
            </p>
            <p>
              I'm constantly learning, building, and exploring new technologies in the tech
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
