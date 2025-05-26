import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const frontendSkills = [
  { name: "HTML5", level: "Experienced" },
  { name: "CSS3", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "Tailwind", level: "Experienced" },
  { name: "SASS", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Angular", level: "Experienced" },
  { name: "Vue Js", level: "Intermediate" },
  { name: "Next Js", level: "Intermediate" },
  { name: "Redux", level: "Experienced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "WordPress", level: "Experienced" },
  { name: "Figma", level: "Experienced" },
  { name: "Photoshop", level: "Experienced" },
  { name: "Illustrator", level: "Experienced" },
];
const backendSkills = [
  { name: "Node Js", level: "Experienced" },
  { name: "MongoDB", level: "Experienced" },
  { name: "Express Js", level: "Experienced" },
  { name: "Firebase", level: "Experienced" },
  { name: "NestJS", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/************* Front-End ***********/}
        <div className="experience_frontend">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            {frontendSkills.map((skill) => (
              <article key={skill.name} className="experience_details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/************* Back-End ***********/}
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            {backendSkills.map((skill) => (
              <article className="experience_details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
