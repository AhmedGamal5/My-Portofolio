import React from "react";
import "./About.css";
import me2 from "../../pic/IMG_20200812_112007.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 >Get To Know</h5>
      <h2 >About Me</h2>
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
              <small>1+ Year Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>11+ Completed</small>
            </article>
          </div>
          <p>
            I am a civil engineer with a passion for technology and
            problem-solving. Over the years, I've had the privilege of working
            on various construction projects, which have taught me valuable
            skills in project management, critical thinking, and attention to
            detail,However, as much as I enjoy civil engineering, I have
            recently discovered a deep fascination for frontend development,
            particularly using React. The way React allows for building
            interactive and user-friendly interfaces is simply captivating. I've
            been eagerly learning and honing my skills in web development, HTML,
            CSS, and JavaScript, and I can't wait to dive even deeper into the
            world of frontend development.
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
