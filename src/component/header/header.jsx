import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/assets/me.png";
import HeaderSocial from "./HeaderSocial";
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Divyanshu Tripathi</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
