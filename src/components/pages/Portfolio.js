import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import imdme from '../../assets/imgs/imdme-homepage.png';
import password from '../../assets/imgs/password-generator.png'

function Portfolio() {
  const [projects] = useState([
    {
      id: "1",
      title: "Javascript Password Generator",
      img: password
    },
    {
      id: "2",
      title: "Project 2, IMDMe",
      img: imdme,
    },
    {
      id: "3",
      title: "Project 3",
    },
    {
      id: "4",
      title: "Project 4",
    },
  ]);
  console.log(projects);
  return (
    <div>
      {projects.map(({ id, img, title }) => {
        console.log(id, title)
        return <ProjectCard img={img} title={title} key={id} />;
      })}
    </div>
  );
}

export default Portfolio;
