import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import imdme from '../../assets/imgs/imdme-homepage.png';
import password from '../../assets/imgs/password-generator.png';
import scheduler from "../../assets/imgs/scheduler.png";
import quiz from "../../assets/imgs/coding-quiz.png";
import readme from "../../assets/imgs/README.png"
import commerce from "../../assets/imgs/e-commerce.png";

const styles = {
  imgStyle: {
    display: 'block',
    margin: '0 auto',
    width: '80%'
  }
};

function Portfolio() {
  const [projects] = useState([
    {
      id: "1",
      title: "Javascript Password Generator",
      img: password,
      link: "https://gen7232.github.io/Password-Generator-homework/"
    },
    {
      id: "2",
      title: "Project 2, IMDMe",
      img: imdme,
      link: "https://movie-review-site-bg22.herokuapp.com"
    },
    {
      id: "3",
      title: "Work Day Sceduler",
      img: scheduler,
      link: "https://gen7232.github.io/Work-Day-Scheduler-homework/"
    },
    {
      id: "4",
      title: "Coding Quiz",
      img: quiz,
      link: "https://gen7232.github.io/Coding-Quiz-homework/"
    },
    {
      id: "5",
      title: "README Generator",
      img: readme,
      link: "https://drive.google.com/file/d/1cDWyYsdFkdnuEQfWx7ERxjze3PHvRkMu/view"
    },
    {
      id: "6",
      title: "E-Commerce Backend",
      img: commerce,
      link: "https://drive.google.com/file/d/12_pyIJi913vjwj60DeGl63Rt9iSnRHly/view"
    }
  ]);
  console.log(projects);
  return (
    <div>
      {projects.map(({ id, img, title, link }) => {
        console.log(id, title)
        return <div>
          <a href={link}>
            <h1>{title}</h1>
          </a>
        <ProjectCard 
        img={img} title={title} key={id} href={link} 
         />
         </div>
      })}
    </div>
  );
}

export default Portfolio;
