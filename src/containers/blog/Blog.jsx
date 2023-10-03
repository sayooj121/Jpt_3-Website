import React from "react";
import "./blog.css";
import { Article } from "../../components/components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening we are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="sep 26 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="sep 26 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi"
          />
          <Article
            imgUrl={blog03}
            date="sep 26 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi"
          />
          <Article
            imgUrl={blog04}
            date="sep 26 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi"
          />
          <Article
            imgUrl={blog05}
            date="sep 26 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
