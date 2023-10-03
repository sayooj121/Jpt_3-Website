import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          {" "}
          Lets Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          aliquid, cum excepturi consectetur asperiores aut commodi earum velit,
          ea nesciunt obcaecati accusantium beatae!
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
