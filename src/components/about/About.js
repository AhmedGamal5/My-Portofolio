import React from "react";
import "./About.css";
import me2 from "../../pic/me3.jpg";
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
              <small>19+ Completed</small>
            </article>
          </div>
          <p>
           I'm Ahmed Gamal Saad, a passionate Front-End Developer dedicated to crafting intuitive, high-performance web experiences. With expertise in modern frameworks like React.js, Angular, and Next.js, I specialize in building dynamic, user-centric applications—from e-commerce platforms to secure authentication systems.

My work focuses on merging clean design with robust functionality, whether it's optimizing WordPress sites, integrating seamless payment solutions like Stripe, or developing responsive interfaces with Framer Motion and Swiper.js. A lifelong learner, I thrive on tackling new challenges and applying cutting-edge technologies to solve real-world problems.

When I'm not coding, you'll find me exploring the latest in UI trends or contributing to projects that push the boundaries of what’s possible on the web. Let’s build something amazing together!
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
