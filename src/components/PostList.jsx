import Post from "./Post";
import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import axios from "axios";
import PostForm from "./PostForm";
import NoPosts from "./NoPosts";
import ErrorMessage from "./ErrorMessage";


const PostList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postlist = useContext(PostContext)

  return (
    <div className="post-list">
      <h1 className="ui header">Posts</h1>
      <div className="ui divider" />
      <PostForm />
      <div className="ui divider" />

      {loading && <div class="ui active centered inline loader"></div>}

      {!loading &&
        postlist.posts &&
        postlist.posts.map((post) => <Post post={post} key={post.id} />)}

      {!loading && error && <ErrorMessage message={error.message} />}

      {!loading && postlist.posts.length === 0 && <NoPosts />}
    </div>
  );
};

export default PostList;
