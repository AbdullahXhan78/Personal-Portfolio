import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/AbdullahXhan78",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Python & C++",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "RESTROMAP – AI Location Platform",
    description:
      "Designed a multi-service software architecture featuring a map-based UI and personalized recommendation system. Built scalable backend REST APIs handling complex spatial filtering and real-time search.",
    image: "/projects/project-1.png",
    link: "https://github.com/AbdullahXhan78/RestroMap_Final_Year_Project",
  },
  {
    title: "Multimodal Image Captioning System",
    description:
      "Engineered a 3-modal AI pipeline converting image input to English text via BLIP, translating to Urdu via MarianMT, and generating bilingual speech output using gTTS deployed on an interactive Gradio app.",
    image: "/projects/project-3.png",
    link: "https://github.com/AbdullahXhan78/Multimodal-Image-Captioning",
  },
  {
    title: "Brain Tumor Detection (CNN & CV)",
    description:
      "Developed a multi-class CNN classifier to categorize MRI images into Glioma, Meningioma, Pituitary, or No Tumor. Optimized training using EarlyStopping, ReduceLROnPlateau, and evaluated with AUC-ROC & confusion matrices.",
    image: "/projects/project-4.png",
    link: "https://github.com/AbdullahXhan78/Brain-Tumor-Detection",
  },
  
  {
    title: "Bank Loan Default Prediction",
    description:
      "Built an end-to-end supervised ML model predicting borrower loan default with demographic and financial data. Executed feature engineering and SMOTE, achieving a top score of 0.75 AUC-ROC with XGBoost.",
    image: "/projects/project-2.png",
    link: "https://github.com/AbdullahXhan78/Bank-Loan-Prediction",
  },
    {
    title: "Ecomm24 – Hackathon E-Commerce Web App",
    description:
      "A feature-rich, high-performance modern e-commerce web application developed for a hackathon using Next.js, Tailwind CSS, and responsive UI components.",
    image: "/projects/project-5.png",
    link: "https://abdullah-hackathon-project.vercel.app/",
  },
  {
    title: "Interactive Web Platform – Hackathon Project",
    description:
      "A modern, responsive full-stack Next.js web application built during hackathon featuring clean architecture, dynamic state management, and seamless UX.",
    image: "/projects/project-6.png",
    link: "https://abdullah-hackathon-03-ten.vercel.app/",
  },

  
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/AbdullahXhan78",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.gg/285hcsfS",
      },
    ],
  },
  {
    title: "Social",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/xhan_abdullah01/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/innoxent.abdullahkhan?mibextid=rS40aB7S9Ucbxw6v",
      },
    ],
  },
  {
    title: "About & Contact",
    data: [
      {
        name: "Karachi, Pakistan",
        icon: null,
        link: "#about-me",
      },
      {
        name: "+92 311-1229195",
        icon: null,
        link: "tel:+923111229195",
      },
      {
        name: "abdullah.94805@gmail.com",
        icon: null,
        link: "mailto:abdullah.94805@gmail.com",
      },
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    role: "Web Developer Intern",
    company: "Mite Minds",
    duration: "August 2024 – October 2024",
    location: "Karachi, Pakistan",
    description: [
      "Engineered responsive application components using Next.js and Express.js, maintaining core platform performance.",
      "Optimized backend data flow, debugged complex system bugs, and collaborated on dynamic API integrations.",
    ],
    skills: ["Next.js", "Express.js", "JavaScript", "REST APIs", "Node.js"],
  },
] as const;

export const EDUCATION_DATA = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  institution: "Iqra University, Karachi",
  duration: "2021 – 2026",
  details:
    "Specializing in Artificial Intelligence, Machine Learning, Computer Vision, and Data Analytics. Built end-to-end predictive models, deep learning classifiers, and full-stack software systems.",
} as const;

export const CERTIFICATIONS_DATA = [
  {
    title: "Generative AI & Metaverse Certification",
    issuer: "Advanced AI Specialization",
    status: "In Progress",
    description:
      "Deep dive into Generative AI architectures, Large Language Models (LLMs), Prompt Engineering, and immersive spatial technologies.",
  },
  {
    title: "Agentic & Robotic AI Engineer Certification",
    issuer: "Autonomous Systems & AI",
    status: "In Progress",
    description:
      "Building autonomous AI agents, multi-agent frameworks, tool-augmented systems, and intelligent robotic workflows.",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/AbdullahXhan78",
};
