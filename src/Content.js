import Img_MedicApp from "./Images/MedicApp.png";
import Img_HenryFood from "./Images/HenryFood.png";
import Img_GranBuda from "./Images/GranBuda.png";

const skillsSection = {
  title: "Tecnologias",
  content: "Tengo manejo de un gran stack de tecnologias web",
  technologies: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      name: "Tailwind",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      name: "HTML5",
    },
  ]
};

const projects = [
  {
    img: Img_MedicApp,
    title: "MedicApp1",
  },
  {
    img: Img_HenryFood,
    title: "HenryFood",
  },
  {
    img: Img_GranBuda,
    title: "GranBuda",
  },
];

export { skillsSection, projects };
