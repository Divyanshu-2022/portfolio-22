import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_634dbek",
      "template_0v85kro",
      form.current,
      "avfZRkZW8DHH2Yidp"
    );
    e.target.reset();
    setTimeout(() => {
      alert("thanks for your Response");
    }, 2000);
  };

  return (
    <section id="contact">
      <h5>get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>divyanshutripathi2076@gmail</h5>
            <a href="divyanshutripathi2076@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Massenger</h4>
            <h5>Divyanshu Tripathi</h5>
            <a href="https://m.me/divyanshu.tripathi.37625" target="_balnk">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats-app</h4>
            <h5>+91-******1775</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6306031775"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End of the Contact section */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
