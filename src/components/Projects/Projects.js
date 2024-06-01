import React from "react";
import * as S from "./Projects.styles";
import { projectsPortfolio } from "./ProjectsData";
import logoGithub from "../../svg/github.png";
import logoWebsite from "../../svg/web.jpg";

console.log(projectsPortfolio);
const Projects = () => {
  return (
    <S.ContainerProjects>
      <S.Title>
        Some of{" "}
        <span>
          {" "}
          <br />
          Projects
        </span>
      </S.Title>
      <S.ContentProjects>
        {projectsPortfolio.map((project, index) => (
          <S.ProjectContent key={index}>
            <S.TitleProjects>{project.title}</S.TitleProjects>
            <S.ContainerImage>
              <img src={project.image} alt={project.title} loazy="true" />
            </S.ContainerImage>
            <S.ContainerTechs>
            {project.techs.map((techs, index) => (
              <div key={index}>
              <img src={techs.src} alt={techs.name} />
              <p>{techs.name}</p>
              </div>
            ))}
            </S.ContainerTechs>
            <S.Description>{project.description}</S.Description>
            <S.ContainerFooter>
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer">
                <img src={logoGithub} alt={project.description} />
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                <img src={logoWebsite} alt={project.description} />
                </a>
              )}
            </S.ContainerFooter>
          </S.ProjectContent>
        ))}
      </S.ContentProjects>
    </S.ContainerProjects>
  );
};

export default Projects;

/*
<div><img src="/img/torta.jpg" alt="Restaurant App" /></div>
      
<div><img src="/img/06.jpg" alt="Restaurant App" /></div>

<div><img src="/img/07.jpg" alt="Restaurant App" /></div>
*/

/*
<img src="/img/torta.jpg" alt="Restaurant App" />
           <p>Texto relacionado con la imagen 1</p>
              <img src="/img/06.jpg" alt="Restaurant App" />
            <p>Texto relacionado con la imagen 2</p>
              <img src="/img/07.jpg" alt="Restaurant App" />
            <p>Texto relacionado con la imagen 3</p>
            */
