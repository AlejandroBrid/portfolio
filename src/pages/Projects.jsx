import "./Projects.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { useEffect, useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "project1",
    description: "project1info",
    technologies: [
      <FaHtml5 key="html" />,
      <IoLogoJavascript key="js" />,
      <IoLogoCss3 key="css3" />,
    ],
    github: "https://github.com/AlejandroBrid/ahorcado",
    deployLink: "https://juego-ahorcado2023.netlify.app/",
    slideshowImages: ["/ahorcado1.png", "/ahorcado2.png", "/ahorcado3.png"],
    imageSrc: "/ahorcado1.png",
  },
  {
    id: 2,
    title: "Hack a Boss News",
    description: "project2info",
    technologies: [
      <FaHtml5 key="html" />,
      <IoLogoJavascript key="js" />,
      <IoLogoCss3 key="css3" />,
      <FaNode key="node" />,
      <FaReact key="react" />,
    ],
    github: "https://github.com/AlejandroBrid/Hack-a-Boss-News",
    slideshowImages: ["/news1.png", "/news2.png", "/news3.png"],
    imageSrc: "/news1.png",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "project3info",
    technologies: [
      <FaHtml5 key="html" />,
      <IoLogoJavascript key="js" />,
      <IoLogoCss3 key="css3" />,
    ],
    github: "https://github.com/AlejandroBrid/portfolio",
    deployLink: "/home",
    slideshowImages: ["/portfolio11.png", "/portfolio2.png", "/portfolio3.png"],
    imageSrc: "/portfolio11.png",
  },
  {
    id: 4,
    title: "Comidas Argentinas",
    description: "project4info",
    technologies: [
      <FaHtml5 key="html" />,
      <IoLogoJavascript key="js" />,
      <IoLogoCss3 key="css3" />,
      <FaNode key="node" />,
      <FaReact key="react" />,
    ],
    github: "https://github.com/AlejandroBrid/comidas-argentinas-front",
    slideshowImages: ["/comidas4.png", "/comidas5.png", "/comidas6.png"],
    imageSrc: "/comidas4.png",
  },
];

export const Projects = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (hoveredProject !== null) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          return (
            (prevIndex + 1) %
            projectsData[hoveredProject - 1].slideshowImages.length
          );
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [hoveredProject]);
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="heading">{t("portfolio")}</h2>
        <div className="project-cards">
          {projectsData.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCurrentImageIndex(0);
              }}
            >
              <img
                className="project"
                src={
                  hoveredProject === project.id
                    ? project.slideshowImages[currentImageIndex]
                    : project.imageSrc
                }
                alt={project.title}
              />
              <h3 className="title">{t(project.title)}</h3>
              <p className="description">{t(project.description)}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-icon">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
