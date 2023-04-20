import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  bootstrap,
  mongodb,
  git,
  figma,
  britishairways,
  deloitte,
  coursera,
  moomagic,
  teekraft,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    file: "/src/assets/resume.pdf",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "AI/ML Enthusiast",
    icon: backend,
  },
  {
    title: "Blockchain Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,

  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 ];

const experiences = [
  {
    title: "Introduction to DevOps by IBM",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "The essential characteristics of DevOps including building a culture of shared responsibility, transparency, and embracing failure.",
      "The importance of Continuous Integration and Continuous Delivery, Infrastructure as Code, Test Driven Development, Behavior Driven Development.",
      "Essential DevOps concepts: software engineering practices, cloud native microservices, automated continuous deployments, and building resilient code.",
      "The organizational impact of DevOps, including breaking down silos, working in cross functional teams, and sharing responsibilities.",
    ],
  },
  {
    title: "Introduction to Artificial Intelligence (AI) by IBM",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Understand what is AI, its applications and use cases and how it is transforming our lives.",
      "Explain terms like Machine Learning, Deep Learning and Neural Networks.",
      "Describe several issues and ethical concerns surrounding AI.",
      "Articulate advice from experts about learning and starting a career in AI.",
    ],
  },
  {
    title: "Getting Started with AI using IBM Watson",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#383E56",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Understand how Watson works, become familiar with its use cases and real life client examples, and be introduced to several of Watson AI services from IBM that enable anyone to easily apply AI and build smart apps.",
      "Implementing responsive design and enswork with several Watson services to demonstrate AI in action.",
       ],
  },
  {
    title: "Building AI Powered Chatbots Without Programming by IBM",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Discover how IBM Watson works and its real-life use cases.",
      "Explore Watson AI services from IBM that enable anyone to easily apply AI and build smart apps.",
      "Work with several Watson services to demonstrate AI in action.",
      "Learn to build chatbots without programming using IBM Watson's visual dialogue builder tool.",
      "Understand how to train chatbots to provide accurate and helpful responses.",
      "Explore chatbot deployment options and integrate them into your website or mobile app.",
    ],
  },
 {
    title: "Technology Virtual Experience Program",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Coding.",
      "Data Analysis.",
      "Development.",
      "Cyber Security.",
      "Forensic Technology.",
    ],
  },
  {
    title: "Data Science Virtual Experience Programme",
    company_name: "British Airways",
    icon: britishairways,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Web scraping to gain company insights",
      "Predicting customer buying behaviour",
    ],
  },


];

const achievements = [
  {
    achievement:
      "2nd Runner-Up at CIEM Celsius Hackathon '23",
    name: "Issued by CIEM",
    company: "March 2023",
  },
  {
    achievement:
      "2nd Runner-Up at AR Workshop & Hackathon",
    name: "Issued by Red Apple Learning",
    company: "March 2022"
  },
  {
    achievement:
      "School Topper's Award - CBSE Non-Medical 12th",
    name: "Issued by AKS Education Awards",
    company: "July 2020",
  },
];

const projects = [
  {
    name: "MooMagic",
    description:
      "This project is a dairy product e-commerce website that empowers small dairy farmers to sell their products online. With this platform, customers can buy a variety of dairy products directly from the farmers, thereby eliminating the need for middlemen and ensuring fair prices for both parties.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: moomagic,
    source_code_link: "https://github.com/ANISAMANTA18/MooMagic",
  },
  {
    name: "Tee-Kraft",
    description:
      "This project is a web application that allows users to create custom 3D t-shirt designs by uploading their images or using AI-generated prompts. The application provides an interactive and user-friendly interface, enabling users to create unique designs for their t-shirts. ",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: teekraft,
    source_code_link: "https://github.com/ANISAMANTA18/teekraft",
  },
  {
    name: "3D portfolio",
    description:
      "An interactive 3D portfolio website built using the latest web development technologies and frameworks. This website is designed to showcase my skills and experiences in a visually engaging and interactive way. It typically features an intuitive and user-friendly interface that provides easy navigation through the website's content.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, achievements, projects };
