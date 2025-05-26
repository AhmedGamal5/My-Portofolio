import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";
const uxServices = [
  "Wireframing & Prototyping",
  "Visual Design",
  "Responsive Design",
  "UI Implementation",
];
const webServices = [
  "Custom Web Applications",
  "Portfolio Websites",
  "E-Commerce Solutions",
  "Customization and Modifications",
  "Responsive Websites",
  "API Integration",
  "Authentication Systems",
  "WordPress Development",
];

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
            {uxServices.map((service, index) => (
              <li key={index}>
                <BiCheck className="service_list-icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            {webServices.map((service, index) => (
              <li key={index}>
                <BiCheck className="service_list-icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
