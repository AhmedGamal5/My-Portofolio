import React from "react";
import "./Portfolio.css";

import img1 from "../../pic/amazone.PNG";
import img2 from "../../pic/Skin.PNG";
import img3 from "../../pic/login-auth-project-2.jpg";
import img4 from "../../pic/Netflix.PNG";
import img5 from "../../pic/DOM-Bankist.jpg";
import img6 from "../../pic/Dibruno.PNG";
import img7 from "../../pic/Back1.PNG";
import img8 from "../../pic/bankist-project.jpg";
import img9 from "../../pic/mapty-project.jpg";
import img10 from "../../pic/Furniro-website.PNG"
import img11 from "../../pic/big motors.png";

const data = [
  {
    id: 1,
    image: img11,
    title: "Big Motors Platform",
    github: "https://github.com/AhmedGamal5/big-motors",
    demo: "https://big-motors.vercel.app/",
  },
  {
    id: 2,
    image: img10,
    title: "Furniture E-Commerce",
    github: "https://github.com/AhmedGamal5/client-side",
    demo: "https://furniroo-website.vercel.app/",
  },
  {
    id: 3,
    image: img1,
    title: "Amazone-clone-website",
    github: "https://github.com/AhmedGamal5/Amazone-clone",
    demo: "https://amazone-clone-sage.vercel.app/",
  },
  {
    id: 4,
    image: img2,
    title: "Skin-Care-website",
    github: "https://github.com/AhmedGamal5/Skin-care-website",
    demo: "https://skin-care-website-alpha.vercel.app/",
  },
  {
    id: 5,
    image: img3,
    title: "login-Auth-Backend",
    github: "https://github.com/AhmedGamal5/login-and-auth-project",
    demo: "https://github.com/AhmedGamal5/login-and-auth-project",
  },
  {
    id: 6,
    image: img4,
    title: "Netflix-clone-website",
    github: "https://github.com/AhmedGamal5/Netflixclone",
    demo: "https://netflixclone-eb6w.vercel.app/",
    note: "* Try to open it from a browser other than Google Chrome.",
  },
  {
    id: 7,
    image: img5,
    title: "DOM-Bankist-Project",
    github: "https://github.com/AhmedGamal5/DOM-Bankist-Project",
    demo: "https://dom-bankist-project.vercel.app/",
  },
  {
    id: 8,
    image: img6,
    title: "Dibruno-food-website",
    github: "https://github.com/AhmedGamal5/Dibrunoproject",
    demo: "https://dibrunoproject.vercel.app/",
  },
  {
    id: 9,
    image: img7,
    title: "Authantication-Backend-Project",
    github: "https://github.com/AhmedGamal5/Authantication-project",
    demo: "https://github.com/AhmedGamal5/Authantication-project",
  },
  {
    id: 10,
    image: img8,
    title: "Bankist-Project",
    github: "https://github.com/AhmedGamal5/Bankist-Project",
    demo: "https://bankist-project-three.vercel.app/",
  },
  {
    id: 11,
    image: img9,
    title: "Mapty-project",
    github: "https://github.com/AhmedGamal5/Mapty-project",
    demo: "https://mapty-project-two.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, note }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
              <h4 className="note">{note}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
