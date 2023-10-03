import React from "react";
import "./style.css";
import { Feature } from "../../components/components";
const featureData = [
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam hic quam sed illo enim libero. Excepturi dolore cum suscipit!",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam hic quam sed illo enim libero. Excepturi dolore cum suscipit!",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam hic quam sed illo enim libero. Excepturi dolore cum suscipit!",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam hic quam sed illo enim libero. Excepturi dolore cum suscipit!",
  },
];
const Style = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now And you Just Need To Realize It . Step into Future
          Today & Make It Happen
        </h1>
        <p className="gradient__text">Reqest Early Access </p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Style;
