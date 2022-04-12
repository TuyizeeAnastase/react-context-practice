import React from "react";
import { useContext } from "react";
import { PostContext } from "../context/PostContext"

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{post.title}</div>
        <div className="description">
          <p>{post.body}</p>
        </div>
      </div>

      <div className="extra content">
        <div className="ui buttons">
          <div onClick={deletePost(post.id)} className="ui basic red button">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;