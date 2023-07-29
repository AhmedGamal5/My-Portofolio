import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const Text = () => {
    alert("Message Send Succesfully");
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qpnlje9",
      "template_2xlo3lr",
      form.current,
      "O4ut52upFVAdW5yTW"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="icon" />
            <h4> Email</h4>
            <h5>Ahmedgamall5534@gmail.com</h5>
            <a
              href="mailto:Ahmedgamall5534@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="icon" />
            <h4> Massenger</h4>
            <a
              href="https://m.me/Anaahmedflame"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="icon" />
            <h4> WhatsApp</h4>
            <a
              href="https://wa.me/201206536588?text"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={Text}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
