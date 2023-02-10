import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/divyanshu-tripathi4/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Divyanshu-2022" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCDDMmTsoW6OTKUxjg84DE9Q"
        target="_blank"
      >
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocial;
