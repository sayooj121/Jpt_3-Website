import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To start</h4>
        <h1 className="gradient__text">
          The Possibility Are Beyond Our Imagination
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dicta
          quibusdam repellendus veritatis praesentium esse, voluptate odit
          tempore!
        </p>
        <h4>Request Early Access To start</h4>
      </div>
    </div>
  );
};

export default Possibility;
