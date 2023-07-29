import React from "react";
import { BiCheck } from "react-icons/bi";
import './Services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Frontend Web Development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Assistance with Web Projects.</p>
            </li> 
            <li>
              <BiCheck className="service_list-icon" />
              <p>Collaboration and Support.</p>
            </li>           
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>React Development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Portfolio Websites.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Code Troubleshooting.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Customization and Modifications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Collaboration and Support.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
