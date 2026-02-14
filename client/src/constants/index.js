import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaPhp, FaJava, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCplusplus, SiC, SiNextdotjs } from 'react-icons/si';

export const experiences = [
    {
        year: "2023",
        role: "Java Spring Boot Training",
        company: "Online/Internship",
        description: "Intensive training on REST APIs, MVC architecture, and MySQL integration. Built robust backend services using Spring Boot."
    },
    {
        year: "Present",
        role: "B.Tech CSE Student",
        company: "Lovely Professional University",
        description: "Focusing on Full Stack Development, Data Structures, and Algorithms. Building scalable projects like NexaMart and FinSathi."
    }
];

export const skills = {
    frontend: [
        { name: "HTML5", icon: "FaHtml5", color: "#e34c26" },
        { name: "CSS3", icon: "FaCss3Alt", color: "#264de4" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38b2ac" },
        { name: "JavaScript", icon: "FaJs", color: "#f0db4f" },
        { name: "React.js", icon: "FaReact", color: "#61dbfb" },
        { name: "Next.js", icon: "SiNextdotjs", color: "#000000" }
    ],
    backend: [
        { name: "Node.js", icon: "FaNode", color: "#68a063" },
        { name: "PHP", icon: "FaPhp", color: "#777bb4" },
        { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
        { name: "REST APIs", icon: "FaDatabase", color: "#00d0ff" }
    ],
    programming: [
        { name: "C", icon: "SiC", color: "#555555" },
        { name: "C++", icon: "SiCplusplus", color: "#00599C" },
        { name: "Java", icon: "FaJava", color: "#007396" },
        { name: "Python", icon: "FaPython", color: "#3776ab" }
    ]
};

export const projects = [
    {
        id: 1,
        title: "NexaMart",
        subtitle: "B2B Marketing Platform",
        description: "A comprehensive B2B platform facilitating seller registration, inventory management, and admin approval workflows. Streamlines the supply chain connecting businesses.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        project_link: "#",
        github_link: "#",
        image_url: "/images/nexamart.jpg", // Placeholder until user provides image
        category: "Full Stack"
    },
    {
        id: 2,
        title: "FinSathi",
        subtitle: "Business Software System",
        description: "A business management tool focusing on brand identity and product line extensions. Helps businesses track performance and manage resources efficiently.",
        tech: ["HTML", "CSS", "PHP", "MySQL"],
        project_link: "#",
        github_link: "#",
        image_url: "/images/finsathi.jpg", // Placeholder
        category: "Web App"
    }
];

export const socialLinks = {
    linkedin: "#",
    github: "#",
    email: "mailto:piyush@example.com", // Update with real email
    phone: "tel:+910000000000" // Update with real phone
};

// Keeping services for compatibility if needed, but focusing on skills/projects as per prompt
export const services = [];
