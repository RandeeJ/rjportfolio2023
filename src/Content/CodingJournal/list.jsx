import React from "react";
import BlogItem from "./item";

const BlogList = ({ blogs }) => (
  <div className="blogList">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);

export default BlogList;
