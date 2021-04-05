import React from "react";

import { API } from "../../consts/Api";

import "./BlogPost.css";

const BlogPost = ({ link, authorImg, author, label, postTitle, postImg }) => {
  return (
    <a className="BlogPost" href={link} target="_blank" rel="noreferrer">
      <div
        className="blog-post"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(${
            API.url + postImg
          }) center center / cover`,
        }}
      >
        <div className="author">
          <div className="author-img">
            <img src={API.url + authorImg} alt="" />
          </div>
          <div className="author-info">
            <small>{label}</small>
            <p>{author}</p>
          </div>
        </div>

        <div className="content">
          <div className="blogpost-title">{postTitle}</div>
          <div className="see-more">
            Повеќе <span>&#8594;</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPost;
