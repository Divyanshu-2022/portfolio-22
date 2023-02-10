import React from "react";

import "./about.css";
import ME from "../../Assets/assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Development Experience</h5>
              <small>1+ Year of Work Experience</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Projects</h5>
              <small>15+ projects done</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Tech Experience</h5>
              <small>1+ Year of Work Experience</small>
            </article>
          </div>
          <p>
            <strong>Hi</strong>, My name is <b>Divyanshu Tripathi . </b>
            I'm from U.P.,Distric-Pratapgrah. I'm currently pursuing on to be a
            Master of Computer Application(MCA) from IGNOU . I have completed
            15+ Projects on Web tech-stack and Backend tech-stack. I am also
            able too maintain Displine in work and life. I can lead team work ,
            if required.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
