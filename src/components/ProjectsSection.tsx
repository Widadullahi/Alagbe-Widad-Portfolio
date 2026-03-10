import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Web-Based Threat Simulation System",
    description: "A cybersecurity tool for simulating and analyzing web-based threats in a controlled environment.",
    tech: ["React", "Node.js", "Express.js"],
    url: "https://web-based-threat-simulation-system.vercel.app/",
  },
  {
    title: "Biltronixx",
    description: "A modern electronics and gadgets e-commerce platform with dynamic product listings and smooth UX.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    url: "https://biltronixx.vercel.app/",
  },
  {
    title: "Biomedical IQ Suite",
    description: "An educational platform for biomedical engineering students with quizzes and learning resources.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://biomedicaliqsuite.netlify.app/",
  },
  {
    title: "Portfolio Builder",
    description: "A tool that helps developers quickly generate professional portfolio websites with ease.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://widadullahi.github.io/PORTFOLIO-BUILDER/",
  },
  {
    title: "Inventory Management System",
    description: "A complete inventory tracking and management solution for businesses to monitor stock levels.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://widadullahi.github.io/Inventory/",
  },
  {
    title: "MJay Travels & Tour",
    description: "A travel agency website showcasing tour packages, destinations, and booking services.",
    tech: ["React", "Tailwind CSS"],
    url: "https://mjaytravelsntour.netlify.app/",
  },
  {
    title: "White Royalties Management Ltd",
    description: "A corporate website for a property and investment management company.",
    tech: ["React", "Tailwind CSS"],
    url: "https://whiteroyaltiesmanagementltd.netlify.app/",
  },
  {
    title: "XCan",
    description: "A modern web application with sleek design and intuitive user experience.",
    tech: ["React", "CSS"],
    url: "https://xcan.netlify.app/",
  },
  {
    title: "Nail Tech Studio",
    description: "A beauty and nail salon website with service listings, gallery, and appointment booking.",
    tech: ["React", "Tailwind CSS"],
    url: "https://nailtechstudio.netlify.app/",
  },
  {
    title: "Property Guide",
    description: "A real estate platform helping users discover, compare, and explore property listings.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://property--guide.vercel.app/",
  },
  {
    title: "Real Estate Management System",
    description: "A full-featured property management system for landlords, agents, and tenants.",
    tech: ["React", "Node.js", "PostgreSQL"],
    url: "https://real--estate-management-system.vercel.app/",
  },
  {
    title: "AIB Med Tech",
    description: "A medical technology platform providing digital healthcare solutions and resources.",
    tech: ["React", "Tailwind CSS"],
    url: "https://aib-medd-tech.vercel.app/",
  },
  {
    title: "Anu Gadget",
    description: "An electronics gadget store with product catalog, cart, and seamless shopping experience.",
    tech: ["React", "Node.js"],
    url: "https://anugadget.vercel.app/",
  },
  {
    title: "YMCA of Lagos",
    description: "The official website for YMCA Lagos — community programs, events, and membership information.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    url: "https://ymcaoflagos.org/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Projects
        </h2>
        <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {projects.length}+ Projects Built // MERN Stack // Full-Stack Solutions
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-secondary px-2 py-1 font-body text-xs text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
