import React from "react";
import "./About.css";
import me2 from "../../pic/me3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={me2} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+1 Year Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>+3</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>+30 Completed</small>
            </article>
          </div>
          <p>
            I'm Ahmed Gamal, a front-end developer with a passion for creating
            responsive, user-friendly web applications. With expertise in React,
            Angular, and modern JavaScript frameworks, I specialize in building
            interactive interfaces that deliver seamless user experiences.
            <br />
            My background includes developing e-commerce platforms with
            full-stack functionality, implementing secure authentication
            systems, and optimizing WordPress sites for performance. I take
            pride in writing clean, efficient code and solving complex problems
            through innovative solutions.
            <br />
            <span style={{ color: "white" }}>
              Let's connect and build something great together!{" "}
            </span>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
