export const profile = {
  name: "Srinesh Ganesh",
  title: "Software Engineer",
  location: "Frisco, TX · Open to relocation",
  phone: "(469) 410-9165",
  email: "emailtosrinesh@gmail.com",
  linkedin: "linkedin.com/in/srineshg",
  github: "github.com/srinashg",
};

export const about = {
  summary:
    "Software Engineer with hands-on experience building customer-facing supply chain platforms, cloud-native telemetry tooling, and secure CI/CD pipelines. I enjoy working across the stack — from Spring Boot REST APIs to Next.js frontends — and I care about shipping reliable software for real users at scale.",
  highlights: [
    "Currently building labor & yard management features used by 1,200+ global customers",
    "Comfortable across Java, Python, and TypeScript ecosystems",
    "AWS Certified Cloud Practitioner",
    "B.S. in Software Engineering from The University of Texas at Dallas",
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Manhattan Associates",
    location: "Atlanta, GA",
    dates: "Aug 2025 - Jun 2026",
    bullets: [
      "Developed and delivered customer-driven labor and yard management capabilities within the Manhattan Active supply chain management platform in collaboration with engineers and business stakeholders.",
      "Engineered Spring Boot entities and REST APIs for warehouse labor and yard management operations, leveraging Windsurf and Glean to accelerate development and system understanding.",
      "Improved application reliability for 1,200+ global customers by implementing validation and defensive error-handling logic.",
      "Ensured production readiness by executing regression testing for critical end-to-end system flows during release candidate and end-of-quarter cycles.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "USAA",
    location: "Plano, TX",
    dates: "May 2024 - Jul 2024",
    bullets: [
      "Built Datadog telemetry dashboards to monitor microservice performance and detect anomalies within USAA's cloud-native GuideWire ClaimCenter application.",
      "Increased monitoring accuracy and enabled proactive issue identification by analyzing historical microservice performance metrics and defining anomaly thresholds.",
      "Documented dependencies across USAA's claims recovery system in collaboration with engineers to improve understanding of system architecture and service interactions.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Fidelity Investments",
    location: "Westlake, TX",
    dates: "Jun 2023 - Aug 2023",
    bullets: [
      "Automated Maven-based application deployment workflows using Jenkins to streamline CI/CD processes.",
      "Remediated Open Policy Agent (OPA) security vulnerabilities in Kubernetes by enforcing least-privilege access for non-root users.",
      "Supported Agile delivery workflows by maintaining Jira boards and contributing to sprint planning and estimation, improving team execution efficiency.",
    ],
  },
];

export type ProjectItem = {
  name: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const projects: ProjectItem[] = [
  {
    name: "CleanBeat AI",
    org: "Next.js · React · TypeScript · Tailwind CSS · Zod · OpenAI API · Spotify Web API · Vitest · Playwright",
    dates: "Jul 2026 - Present",
    bullets: [
      "Develop a full-stack multimodal web application that converts uploaded room photographs into editable cleaning plans and workload-matched music recommendations.",
      "Engineer a server-side vision-analysis pipeline with the OpenAI API and validate structured model output through TypeScript and Zod while separating visible evidence, assumptions, uncertainty, and confidence.",
      "Implement deterministic task-ordering, cleaning-time estimation, and music-profile logic and integrate the Spotify Web API to retrieve relevant public playlists without routing Spotify content through the AI model.",
      "Build unit, component, integration, and end-to-end test coverage with Vitest, React Testing Library, and Playwright to validate data schemas, user interactions, API behavior, error handling, and complete application workflows.",
    ],
  },
  {
    name: "Personal Portfolio",
    org: "Figma · React · Next.js · TypeScript · Tailwind CSS · Vercel",
    dates: "Jul 2026",
    bullets: [
      "Designed and implemented a responsive personal portfolio using Figma, React, and Next.js, translating design concepts into a production-ready web application.",
      "Developed portfolio sections and reusable UI components with TypeScript and Tailwind CSS, emphasizing accessibility, responsive design, and maintainable frontend architecture.",
      "Leveraged AI-assisted development tools, including Claude Code, to accelerate UI implementation and iterative refinement.",
      "Automated deployment workflows using GitHub and Vercel, enabling continuous delivery of new features and improvements.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  school: "The University of Texas at Dallas",
  location: "Richardson, TX",
  dates: "Aug 2021 - May 2025",
  activities: [
    "Association for Computing Machinery (ACM)",
    "Artificial Intelligence Society",
  ],
};

export const skills = {
  Languages: ["Java", "Python", "C/C++", "SQL", "TypeScript", "JavaScript"],
  Frameworks: ["Next.js", "React", "Spring Boot", "Django"],
  Databases: ["MySQL", "PostgreSQL"],
  Tools: ["Git", "Datadog", "Docker", "Claude Code", "Figma"],
  Certifications: ["AWS Certified Cloud Practitioner"],
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
] as const;
