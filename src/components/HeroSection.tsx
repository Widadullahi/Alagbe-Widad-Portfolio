import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="bg-background px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {profile.availability}
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Hi, I’m Widad Alagbe.
        </h1>

        <p className="mt-5 text-xl font-semibold text-foreground">
          {profile.role}
        </p>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
