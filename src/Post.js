import React from "react";
import { compareAsc, format } from "date-fns";
import { Link } from "react-router-dom";
import { BASE_URL } from "./backendUrl";

const Post = ({_id,title, summary, cover, content, createdAt, author }) => {
  return (
    
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={BASE_URL+"/" + cover} alt="" />
        </Link>
      </div>
      <div className="text">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), "dd-mm-yyyy HH:mm:ss")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
