import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    nameIta: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    nameIta: "Chi sono",
    hash: "#about",
  },
  {
    nameEng: "Services",
    nameIta: "",
    hash: "#Services",
  },
 
  {
    nameEng: "Projects",
    nameIta: "Progetti",
    hash: "#projects",
  },
 
  {
    nameEng: "Skills",
    nameIta: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    nameIta: "Contatti",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "ExMate Travel Booking System",
    description:
      "This web application, built with HTML, CSS, and PHP, offers seamless hotel and tour package bookings.",
    tags: ["HTML", "CSS", "Boostrap", "PHP", "JavaScript" ,"MySQL"],
    imageUrl: "/exmateui.png",
    link: "https://github.com/Dimuthnilanjana/Exmate_tour_booking",
  },
  {
    title: "Classic Snake Game",
    description:
      "Relive the nostalgia! Control the snake, collect food, and grow without hitting walls or yourself. Simple, timeless fun! ",
    tags: ["HTML", "CSS", "Javascript", ],
    imageUrl: "/snakegame.png",
    link: "https://github.com/Dimuthnilanjana/snakegame_js",
  },
  {
    title: "Heart Disease Analyzer",
    description:
      "Predict and assess heart disease risk with machine learning. Early detection for better cardiac health. ",
    tags: ["Python", "Jupitor Note Book", "Pandas", "Colab"],
    imageUrl: "/hearta.png",
    link: "https://github.com/Dimuthnilanjana/Heart_desease_analyzer",
  },
  {
    title: "Next.js Profile",
    description:
      "Crafting personal website on Next.js. Captivating design and dynamic content showcase skills and journey. Explore my digital world today.",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Framer Motions"],
    imageUrl: "/web.png",
    link: "https://github.com/Dimuthnilanjana/dimuthnilanjana.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Figma",
  "Adobe XD",
  "Tailwind",
  "Photoshop",
  "MongoDB",
  "Illustrator",
  "PHP",
  "Boostrap",
];
