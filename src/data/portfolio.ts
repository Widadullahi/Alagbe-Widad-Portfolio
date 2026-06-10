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

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Widad Alagbe",
  role: "MERN Stack Developer",
  location: "Lagos, Nigeria",
  email: "alagbewidad814@gmail.com",
  phone: "+234 810 092 6871",
  resumeUrl: "/Widad Alagbe's Resume.pdf",
  intro:
    "I build responsive, modern web applications with React, polished UI, and reliable backend APIs using Node.js, Express, and PostgreSQL.",
  summary:
    "I solve problems with user-friendly digital products, clean frontend experiences, and dependable RESTful services for businesses and communities.",
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
    skills: ["HTML", "CSS", "JavaScript", "Responsive design", "React.js", "Component-driven UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Golang fundamentals", "RESTful APIs", "API integration", "Authentication"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "SQL", "Data modeling", "Database reliability"],
  },
  {
    title: "Delivery",
    skills: ["Git", "GitHub", "Render", "Vercel", "Deployment", "Cloud fundamentals"],
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
    title: "Biltronix Automotive",
    description: "A modern electronics e-commerce experience with streamlined product browsing.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    url: "https://biltronix.vercel.app/",
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
    url: "https://aib-medtech.vercel.app/",
    category: "Health Tech",
  },
  {    title: "Maknova",
    description: "Developed a clean, responsive website for Maknova with polished navigation and interface flow.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    url: "https://maknova.netlify.app/",
    category: "Portfolio",
    highlight: "Led frontend implementation and UX polish for a modern brand presence.",
  },
  {
    title: "Traksend",
    description: "Assisted the Traksend development team on frontend improvements and responsive behavior.",
    tech: ["React", "CSS", "Client collaboration"],
    url: "https://www.traksend.com/",
    category: "Logistics",
    highlight: "Supported interface consistency and delivery-ready site updates.",
  },
  {    title: "Anu Gadget",
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

export const experience: Experience[] = [
  {
    role: "Frontend Developer & Production Team Lead",
    company: "Voyapp",
    location: "Lagos, Nigeria",
    period: "Apr 2026 - Current",
    highlights: [
      "Built React applications using Next.js and followed Figma UI specifications.",
      "Delivered maintainable documentation updated regularly for quick team reference.",
      "Participated in code reviews and collaborated with cross-functional teams for smooth delivery.",
      "Improved user experience across product interfaces with polished frontend execution.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    location: "Lagos, Nigeria",
    period: "Aug 2024 - Current",
    highlights: [
      "Built responsive client websites and applications using React, Node.js, and Express.",
      "Designed and maintained RESTful APIs backed by MySQL, SQLite, and PostgreSQL.",
      "Integrated backend services with frontend interfaces for consistent data flow.",
      "Managed source control with Git and GitHub to keep project history clean.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Arcanum Lab",
    location: "Lagos, Nigeria",
    period: "Feb 2026 - May 2026",
    highlights: [
      "Assisted in updating site content and improving page performance.",
      "Streamlined website functionality for enhanced browser compatibility.",
      "Participated in Agile meetings and supported team development workflows.",
    ],
  },
  {
    role: "Front-End Web Developer",
    company: "Freelance",
    location: "Lagos, Nigeria",
    period: "Dec 2023 - Jul 2024",
    highlights: [
      "Designed responsive websites using HTML, CSS, JavaScript, and React.",
      "Translated UI designs into functional, reusable frontend components.",
      "Delivered on client requirements with clean, maintainable code.",
    ],
  },
];

export const stats = [
  { value: "Selected", label: "Project work" },
  { value: `${games.length}+`, label: "Games built" },
  { value: "3+", label: "Years building" },
  { value: "Frontend", label: "Strongest area" },
];
