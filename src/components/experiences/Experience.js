import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

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
            <article className="experience_details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Css3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/************* Back-End ***********/}
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="icons" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
