import React from "react";
// import CategoryLabel from "./posts/categories";
import { Link } from "react-router-dom";
import { BlogPosts } from "./posts/blogPosts";

const BlogItem = ({
  blog: { id, content, title, createdAt, myName, referenceLink },
}) => {
  console.log("content", content);
  // console.log("links", referenceLink)

  return (
    <div className="blogItem" key={id}>
      {/* 48:22 */}
      {/* image here */}
      {/* <img src ={cover} alt =" cover"/> */}
      {/* <CategoryLabel label={category} /> */}
      <h3>{title}</h3>

      {/* <Link to={{
        pathname: `/codingJournal/${id}`,
        state: {content: content}
        }} content2={{content}}
      > Read More </Link> */}

      <Link
        to={`/codingJournal/${id}`}
        state={{
          description: { content },
          link: { referenceLink },
          blogTitle: { title },
          blogAuthor: { myName },
          blogDate: { createdAt },
        }}
        className="blogItem-readMore"
      >
        Read More ...{" "}
      </Link>

      <footer className="blogItem-footer">
        {/* <img src={myAvatar} alt="avatar" /> */}
        <div className="blogItem-footer-author">by {myName}</div>
        <div className="blogItem-footer-date">written on: {createdAt} </div>
      </footer>
    </div>
  );
};

export default BlogItem;
