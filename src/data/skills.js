import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaFigma, FaDatabase, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiRedux, SiNextdotjs, SiExpress, SiFirebase 
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, level: 95, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, level: 98, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 95, color: "#1572B6" },
      { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 90, color: "#339933" },
      { name: "Express", icon: SiExpress, level: 88, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 82, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, level: 87, color: "#FFCA28" },
      { name: "REST API", icon: FaDatabase, level: 90, color: "#FF6B6B" },
    ]
  },
  {
    title: "Araçlar & Diğer",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 92, color: "#F05032" },
      { name: "Docker", icon: FaDocker, level: 78, color: "#2496ED" },
      { name: "AWS", icon: FaAws, level: 75, color: "#FF9900" },
      { name: "Figma", icon: FaFigma, level: 85, color: "#F24E1E" },
    ]
  }
];

