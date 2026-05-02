export type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string;
  category: string;
  highlight?: string;
  featured?: boolean;
};

export type GameProject = {
  title: string;
  description: string;
  url: string;
};

export const profile = {
  name: "Widad Alagbe",
  role: "MERN Stack Developer",
  location: "Lagos, Nigeria",
  email: "alagbewidad814@gmail.com",
  phone: "+234 810 092 6871",
  resumeUrl: "/Alagbe_Widad_Resume_CV.pdf",
  intro:
    "I build fast, reliable products with strong frontend execution, while continuing to grow my backend skills with Node.js, Express, and MongoDB.",
  summary:
    "I turn ideas into clean, maintainable digital experiences with a strong focus on usability, performance, and real-world impact.",
  availability: "Available for freelance and full-time roles",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Widadullahi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wura-ola-7b20aa316/" },
  { label: "TikTok", href: "https://www.tiktok.com/@widadullahi" },
  { label: "Instagram", href: "https://www.instagram.com/code_with_widadullahi" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Currently improving with Node.js", "Express.js fundamentals", "REST API basics", "Authentication basics"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Data modeling", "Query optimization"],
  },
  {
    title: "Delivery",
    skills: ["Git", "GitHub", "Sanity", "Vercel", "Render", "Netlify"],
  },
];

export const projects: Project[] = [
  {
    title: "Web-Based Threat Simulation System",
    description:
      "A cybersecurity platform for simulating and analyzing web threats inside a controlled environment.",
    tech: ["React", "Node.js", "Express.js"],
    url: "https://web-based-threat-simulation-system-nu.vercel.app/",
    category: "Security",
    highlight: "Threat modeling and controlled simulation workflows",
    featured: true,
  },
  {
    title: "Property Guide",
    description:
      "A real estate discovery platform that helps users browse, compare, and explore property listings.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://property--guide.vercel.app/",
    category: "Real Estate",
    highlight: "Searchable listings and a structured property browsing flow",
    featured: true,
  },
  {
    title: "Real Estate Management System",
    description:
      "A property management system for landlords, agents, and tenants with operational workflows.",
    tech: ["React", "Node.js", "PostgreSQL"],
    url: "https://real--estate-management-system.vercel.app/",
    category: "Operations",
    highlight: "Built for multi-role property operations",
    featured: true,
  },
  {
    title: "YMCA of Lagos",
    description:
      "An organizational website for community programs, events, and membership information.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    url: "https://ymcaoflagos.org/",
    category: "Organization",
    highlight: "Clear communication for members, visitors, and events",
    featured: true,
  },
  {
    title: "Biltronixx",
    description: "A modern electronics e-commerce experience with streamlined product browsing.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    url: "https://biltronixx.vercel.app/",
    category: "E-commerce",
  },
  {
    title: "Biomedical IQ Suite",
    description:
      "An educational platform for biomedical engineering students featuring quizzes and learning resources.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://biomedicaliqsuite.netlify.app/",
    category: "Education",
  },
  {
    title: "Portfolio Builder",
    description: "A tool for helping developers generate a clean professional portfolio website quickly.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://widadullahi.github.io/PORTFOLIO-BUILDER/",
    category: "Developer Tools",
  },
  {
    title: "Inventory Management System",
    description: "A stock tracking solution for monitoring inventory levels and business operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://widadullahi.github.io/Inventory/",
    category: "Business",
  },
  {
    title: "MJay Travels & Tour",
    description: "A travel agency website showcasing destinations, packages, and booking information.",
    tech: ["React", "Tailwind CSS"],
    url: "https://mjaytravelsntour.netlify.app/",
    category: "Travel",
  },
  {
    title: "White Royalties Management Ltd",
    description: "A corporate website for a property and investment management company.",
    tech: ["React", "Tailwind CSS"],
    url: "https://whiteroyaltiesmanagementltd.netlify.app/",
    category: "Corporate",
  },
  {
    title: "XCan",
    description: "A modern web application with a clean interface and simple product experience.",
    tech: ["React", "CSS"],
    url: "https://xcan.netlify.app/",
    category: "Product",
  },
  {
    title: "Nail Tech Studio",
    description: "A salon website with service presentation, visual branding, and booking-oriented content.",
    tech: ["React", "Tailwind CSS"],
    url: "https://nailtechstudio.netlify.app/",
    category: "Beauty",
  },
  {
    title: "AIB Med Tech",
    description: "A digital healthcare platform presenting medical technology solutions and resources.",
    tech: ["React", "Tailwind CSS"],
    url: "https://aib-medd-tech.vercel.app/",
    category: "Health Tech",
  },
  {
    title: "Anu Gadget",
    description: "An electronics storefront with a product catalog and shopping-focused UX.",
    tech: ["React", "Node.js"],
    url: "https://anugadget.vercel.app/",
    category: "Retail",
  },
];

export const games: GameProject[] = [
  {
    title: "Medical Quiz Game",
    description: "An interactive quiz game built to make healthcare revision more engaging for students.",
    url: "https://medicalquizgamee.netlify.app/",
  },
  {
    title: "Memory Match Game",
    description: "A browser-based memory game focused on pattern recall, timing, and light game feel.",
    url: "https://memorymatchgamee.netlify.app/",
  },
  {
    title: "Pharmacy Snake Game",
    description: "A pharmacy-themed twist on the classic snake game with simple, playful interaction.",
    url: "https://pharmacysnakegame.netlify.app/",
  },
];

export const stats = [
  { value: "Selected", label: "Project work" },
  { value: `${games.length}+`, label: "Games built" },
  { value: "3+", label: "Years building" },
  { value: "Frontend", label: "Strongest area" },
];
