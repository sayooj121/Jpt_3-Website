import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text"> Do You Want To Step Into The Future</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, minima!
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>copy right content </p>
      </div>
    </div>
  );
};

export default Footer;
