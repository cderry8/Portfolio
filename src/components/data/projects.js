import {
  Html,
  Css,
  JavaScript,
  Tailwind,
  Next,
  ReactJS,
  TypeScript,
  NodeJS,
  Express,
  Figma,
  PHP,
  SQL,
  MongoDB,
  Flutter,
  Git,
  AWS,
  Python,
} from "./technologies";

/** @typedef {'live' | 'maintenance' | 'concept' | 'demo'} ProjectStatus */

export const projectsData = [

  {
    id: 1,
    title: "ADRIEN",
    description: "Business website for Adrien Business Group Ltd — a construction company. Built with Next.js and Node.js, featuring smooth animations and a custom admin dashboard to manage projects and news.",
    liveUrl: "https://www.adrienbusinessgroup.com/",
    repoUrl: "https://github.com/cderry8/adrien-business-group-ltd",
    githubUrl: "https://github.com/cderry8/adrien-business-group-ltd",
    videoUrl: "",
    detailsUrl: "/projects/11",
    year: 2025,
    role: "Full-stack engineer",
    status: "live",
  highlights: ["Next.js", "Node.js & Express", "MongoDB", "Admin Dashboard", "REST API", "Animations"],
    technologies: [Next, NodeJS, Tailwind , MongoDB , Express],
    images: ["/adrien/1.png", "/adrien/2.png","/adrien/3.png","/adrien/4.png","/adrien/5.png","/adrien/6.png","/adrien/7.png",],
    additionalInfo:
      "Designed and developed a full professional website for Adrien Business Group Ltd, a Rwandan construction and real estate company. The site highlights the company's services, completed projects, and news updates with smooth page animations for a polished user experience. Built a custom admin dashboard connected to a Node.js + Express backend and MongoDB database, allowing the client to independently add new projects, publish news, and manage all site content without touching code. The frontend was built with Next.js for fast page loads and clean routing. Delivered a complete, production-ready product from design to deployment.",
  },

];
