import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";
const Projects = () => {
  const works = [
    {
      stack: [],
      description:
        "TakeShape is a backend-as-a-service SaaS for headless e-commerce developers.",
      title: "TakeShape Docs",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://www.takeshape.io/",
      image: "img/takeshape.png",
      index: 0,
      docsUrl: "https://app.takeshape.io/docs/",
    },
    {
      stack: [],
      description:
        "I also publish works on Medium about the Technical Writing field.",
      title: "Medium Articles",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://recipe-app.haochenq.vercel.app/",
      image: "img/medium1.png",
      index: 1,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">
        <Translate>Recent Work</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
