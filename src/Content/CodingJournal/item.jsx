import React from "react";
// import CategoryLabel from "./posts/categories";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: { id, description, title, createdAt, myName, referenceLink },
}) => (
  <div className="blogItem">
    {/* 48:22 */}
    {/* image here */}
    {/* <img src ={cover} alt =" cover"/> */}
    {/* <CategoryLabel label={category} /> */}
    <h3>{title}</h3>

    <div className="blogItem-description">
      <h5>{referenceLink}</h5>
      <p>{description}</p>
    </div>

    <footer>
      <div className="blogItem-footer">
        {/* <img src={myAvatar} alt="avatar" /> */}
        <div>
          <h6>{myName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link to={`/codingJournal/${id}`}> Read More </Link>
    </footer>
  </div>
);

export default BlogItem;
