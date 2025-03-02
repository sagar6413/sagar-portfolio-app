// db.ts - Contains all the JSON data extracted from components

// Types
export interface Skill {
  name: string;
  icon: string; // Changed from React.ReactNode to string for serialization
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string; // Changed from React.ReactNode to string for serialization
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  icon: string; // Changed from component reference to string
  tags: string[];
  color: string;
  gradient: string;
  accent: string;
  hoverAccent: string;
  stats: Record<string, string | number>;
}

export interface CompanyData {
  name: string;
  icon: string; // Changed from React.ReactNode to string for serialization
  color: string;
}

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  color: string;
}

export interface Feature {
  icon: string; // Changed from React.ElementType to string
  title: string;
  description: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: string; // Changed from component reference to string
  href: string;
}

export interface TechStackItem {
  name: string;
  icon: string; // Changed from React.ReactNode to string
}

// Navigation Items
export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Social Links
export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "Github", href: "https://github.com" },
  { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com" },
  { name: "Twitter", icon: "Twitter", href: "https://twitter.com" },
  { name: "Email", icon: "Mail", href: "mailto:sagar@example.com" },
];

// Tech Stack
export const techStack: TechStackItem[] = [
  { name: "Node.js", icon: "Terminal" },
  { name: "Express", icon: "Code" },
  { name: "MongoDB", icon: "Database" },
  { name: "AWS", icon: "Cloud" },
  { name: "Microservices", icon: "Cpu" },
];

// Features
export const features: Feature[] = [
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Specialized in building robust, scalable backend systems with Node.js, Express, and MongoDB.",
  },
  {
    icon: "Database",
    title: "Database Design",
    description:
      "Expert in designing efficient database schemas and optimizing queries for performance.",
  },
  {
    icon: "Cpu",
    title: "Microservices",
    description:
      "Experience in designing and implementing microservice architectures for scalable applications.",
  },
  {
    icon: "Globe",
    title: "API Development",
    description:
      "Proficient in creating RESTful and GraphQL APIs with comprehensive documentation.",
  },
];

// Skills Data
export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      {
        name: "Node.js",
        icon: "Terminal",
        level: 90,
        color: "from-green-500 to-emerald-400",
      },
      {
        name: "Express",
        icon: "Code",
        level: 85,
        color: "from-blue-500 to-cyan-400",
      },
      {
        name: "NestJS",
        icon: "Code",
        level: 80,
        color: "from-red-500 to-pink-400",
      },
      {
        name: "TypeScript",
        icon: "Code",
        level: 85,
        color: "from-blue-500 to-indigo-400",
      },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: "Database",
        level: 90,
        color: "from-green-500 to-emerald-400",
      },
      {
        name: "PostgreSQL",
        icon: "Database",
        level: 85,
        color: "from-blue-500 to-cyan-400",
      },
      {
        name: "Redis",
        icon: "Database",
        level: 75,
        color: "from-red-500 to-orange-400",
      },
      {
        name: "Elasticsearch",
        icon: "Database",
        level: 70,
        color: "from-yellow-500 to-amber-400",
      },
    ],
  },
  {
    title: "DevOps",
    icon: "Cloud",
    skills: [
      {
        name: "Docker",
        icon: "Layers",
        level: 85,
        color: "from-blue-500 to-cyan-400",
      },
      {
        name: "Kubernetes",
        icon: "Layers",
        level: 75,
        color: "from-blue-500 to-indigo-400",
      },
      {
        name: "AWS",
        icon: "Cloud",
        level: 80,
        color: "from-orange-500 to-amber-400",
      },
      {
        name: "CI/CD",
        icon: "GitBranch",
        level: 85,
        color: "from-green-500 to-emerald-400",
      },
    ],
  },
  {
    title: "Architecture",
    icon: "Cpu",
    skills: [
      {
        name: "Microservices",
        icon: "Layers",
        level: 85,
        color: "from-purple-500 to-indigo-400",
      },
      {
        name: "RESTful APIs",
        icon: "Globe",
        level: 90,
        color: "from-blue-500 to-cyan-400",
      },
      {
        name: "GraphQL",
        icon: "Globe",
        level: 80,
        color: "from-pink-500 to-rose-400",
      },
      {
        name: "System Design",
        icon: "Workflow",
        level: 85,
        color: "from-indigo-500 to-blue-400",
      },
    ],
  },
];

// Projects Data
export const projects: Project[] = [
  {
    title: "E-commerce Microservices",
    description:
      "Designed and implemented a scalable microservices architecture for an e-commerce platform handling 10,000+ daily transactions.",
    icon: "Server",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    color: "from-violet-500/90 to-indigo-600/90",
    gradient:
      "bg-gradient-radial from-violet-500/10 via-transparent to-transparent",
    accent: "border-violet-500/20",
    hoverAccent: "group-hover:border-violet-500/40",
    stats: { throughput: "10K+", uptime: "99.99%", instances: 24 },
  },
  {
    title: "Real-time Analytics API",
    description:
      "Built a high-performance API for real-time data analytics processing 5M+ events daily with sub-second response times.",
    icon: "Database",
    tags: ["Python", "FastAPI", "Redis", "TimescaleDB", "AWS"],
    color: "from-cyan-500/90 to-blue-600/90",
    gradient:
      "bg-gradient-radial from-cyan-500/10 via-transparent to-transparent",
    accent: "border-cyan-500/20",
    hoverAccent: "group-hover:border-cyan-500/40",
    stats: { throughput: "5M+", latency: "<100ms", nodes: 12 },
  },
  {
    title: "Authentication Service",
    description:
      "Developed a secure, OAuth2-compliant authentication service with multi-factor authentication and role-based access control.",
    icon: "Terminal",
    tags: ["Node.js", "Express", "JWT", "MongoDB", "Docker"],
    color: "from-emerald-500/90 to-teal-600/90",
    gradient:
      "bg-gradient-radial from-emerald-500/10 via-transparent to-transparent",
    accent: "border-emerald-500/20",
    hoverAccent: "group-hover:border-emerald-500/40",
    stats: { users: "500K+", protocols: 6, mfa: "99.8%" },
  },
  {
    title: "Content Management API",
    description:
      "Created a flexible, headless CMS API with advanced content modeling, versioning, and multi-language support.",
    icon: "Code",
    tags: ["Java", "Spring Boot", "Elasticsearch", "PostgreSQL", "AWS S3"],
    color: "from-fuchsia-500/90 to-purple-600/90",
    gradient:
      "bg-gradient-radial from-fuchsia-500/10 via-transparent to-transparent",
    accent: "border-fuchsia-500/20",
    hoverAccent: "group-hover:border-fuchsia-500/40",
    stats: { content: "120TB", languages: 28, models: 46 },
  },
  {
    title: "Payment Processing System",
    description:
      "Engineered a secure payment processing system handling multiple payment methods with fraud detection capabilities.",
    icon: "Layers",
    tags: ["Go", "gRPC", "PostgreSQL", "Redis", "Kubernetes"],
    color: "from-amber-500/90 to-orange-600/90",
    gradient:
      "bg-gradient-radial from-amber-500/10 via-transparent to-transparent",
    accent: "border-amber-500/20",
    hoverAccent: "group-hover:border-amber-500/40",
    stats: { transactions: "2M+", methods: 14, fraud: "0.01%" },
  },
  {
    title: "AI Recommendation Engine",
    description:
      "Built an AI-powered recommendation engine that increased user engagement by 35% through personalized content suggestions.",
    icon: "Sparkles",
    tags: ["Python", "TensorFlow", "FastAPI", "MongoDB", "AWS"],
    color: "from-pink-500/90 to-rose-600/90",
    gradient:
      "bg-gradient-radial from-pink-500/10 via-transparent to-transparent",
    accent: "border-pink-500/20",
    hoverAccent: "group-hover:border-pink-500/40",
    stats: { accuracy: "92%", models: 8, features: 120 },
  },
];

// Companies Data
export const companies: CompanyData[] = [
  {
    name: "Apple",
    color: "#A2AAAD",
    icon: "AppleIcon",
  },
  {
    name: "Google",
    color: "#4285F4",
    icon: "GoogleIcon",
  },
  {
    name: "Microsoft",
    color: "#00A4EF",
    icon: "MicrosoftIcon",
  },
  {
    name: "Netflix",
    color: "#E50914",
    icon: "NetflixIcon",
  },
];

// Experiences Data
export const experiences: Record<string, ExperienceData> = {
  Netflix: {
    title: "Software Engineer Intern",
    company: "Netflix",
    period: "Jan 2021 - Jun 2021",
    location: "Los Gatos, CA",
    color: "#E50914",
    achievements: [
      "Worked on the Netflix team",
      "Broke the prod on the first day itself",
      "Coined the term Netflix and Chill - which is now used by millions of people",
    ],
  },
  Google: {
    title: "Software Engineer",
    company: "Google",
    period: "Jul 2021 - Dec 2022",
    location: "Mountain View, CA",
    color: "#4285F4",
    achievements: [
      "Worked on Google Search algorithms",
      "Improved search results accuracy by 15%",
      "Contributed to the open-source community",
    ],
  },
  Microsoft: {
    title: "Senior Developer",
    company: "Microsoft",
    period: "Jan 2023 - Dec 2023",
    location: "Redmond, WA",
    color: "#00A4EF",
    achievements: [
      "Led a team of 5 developers",
      "Implemented new features for Microsoft 365",
      "Reduced application load time by 30%",
    ],
  },
  Apple: {
    title: "UI/UX Engineer",
    company: "Apple",
    period: "Jan 2024 - Present",
    location: "Cupertino, CA",
    color: "#A2AAAD",
    achievements: [
      "Designed user interfaces for upcoming products",
      "Collaborated with the design team on iOS improvements",
      "Implemented accessibility features",
    ],
  },
};
