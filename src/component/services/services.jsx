import React from "react";
import "./services.css";
import { BiBadgeCheck } from "react-icons/bi";
const services = () => {
  return (
    <section id="services">
      <h5>The work I do</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                UX/UI Design work in the computing, software, and information
                technology industry.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>Let's create a better user interface for the user.</p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Building a design that attract user rather than following of
                work.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                I have been always curious to do numerous test on the design of
                the any application.
              </p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX */}
        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Responsible for designing and building the interface, navigation
                and aesthetic of websites for businesses and clients.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Web Designe should possess a range of skills and qualities.{" "}
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Creating the coding that brings a website to life and helps it
                to perform as required by the host.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Designing not only the way a website looks but also how it
                operates for the end user.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Taking responsibility for what functions can be performed when a
                user lands on the web page.
              </p>
            </li>
          </ul>
        </article>
        {/* End OF Web-development */}
        <article className="service">
          <div className="services__head">
            <h3>Blogging</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                nobis?
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>I create some personal blogs over variety of topics.</p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                I am not professional in it but i do love to write about things.
              </p>
            </li>
            <li>
              <BiBadgeCheck className="service__list-icon" />
              <p>
                Those things in which i don't posses any knowledge, I rather
                keep silent in those.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
