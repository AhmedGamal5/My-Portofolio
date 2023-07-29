import React from "react";
import "./Portfolio.css";

import img1 from '../../pic/amazone.PNG';
import img2 from '../../pic/Skin.PNG';
import img3 from '../../pic/Netflix.PNG';
import img4 from '../../pic/shiloh.PNG';
import img5 from '../../pic/Dibruno.PNG';
import img6 from '../../pic/Back1.PNG';

const data = [
  {
    id: 1,
    image: img1,
    title: "Amazone-clone-website",
    github: "https://github.com/AhmedGamal5/Amazone-clone",
    demo: "https://amazone-clone-sage.vercel.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Skin-Care-website",
    github: "https://github.com/AhmedGamal5/Skin-care-website",
    demo: "https://skin-care-website-alpha.vercel.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Netflix-clone-website",
    github: "https://github.com/AhmedGamal5/Netflixclone",
    demo: "https://netflixclone-eb6w.vercel.app/",
    note:'* Try to open it from a browser other than Google Chrome.'
  },
  {
    id: 4,
    image: img4,
    title: "Shiloh-website",
    github: "https://github.com/AhmedGamal5/Shiloh-website",
    demo: "https://shiloh-website.vercel.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Dibruno-food-website",
    github: "https://github.com/AhmedGamal5/Dibrunoproject",
    demo: "https://dibrunoproject.vercel.app/",
  }, 
  {
    id: 6,
    image: img6,
    title: "Authantication-Backend-Project",
    github: "https://github.com/AhmedGamal5/Authantication-project",
    demo: "https://github.com/AhmedGamal5/Authantication-project",
  }
];

const Portfolio = () => {
  return(
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo, note}) => {
          return(
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn"  target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <h4 className="note">{note}</h4>
            </article>
          )
        })
      }
    </div>




  </section>
  ) 
};

export default Portfolio;
