import React, { useState, useEffect } from "react";

import BlogPost from "../BlogPost/BlogPost";

import { API } from "../../consts/Api";

import "./BlogPosts.css";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API.paths.blogs)
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs.length >= 3) {
          setPosts(data.blogs.splice(data.blogs.length - 3));
        } else {
          setPosts(data.blogs);
        }
      });
  }, []);

  return (
    <div className="BlogPosts">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          author={post.author}
          label={post.author_subheading}
          link={post.blog_url}
          authorImg={post.author_avatar}
          postTitle={post.short_desc}
          postImg={post.path}
        />
      ))}
    </div>
  );
};

export default BlogPosts;
