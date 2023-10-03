import React from "react";
import "./whatgpt.css";
import { Feature } from "../../components/components";
const Whatgpt = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is gpt3"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolores quasi pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet veniam quia! Quisquam, ea porro!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          the possibilities are beyond your imagination
        </h1>
        <p className="gradient__text">Explore The library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="chatbot"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <Feature
          title="Education"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default Whatgpt;
