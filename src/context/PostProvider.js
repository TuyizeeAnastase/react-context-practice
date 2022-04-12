import axios from "axios";
import { useState } from "react";
import { PostContext } from "./PostContext";

const PostProvider =  props  => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10";  
  
  axios.get(API_URL).then((res)=>{
      setPosts(res.data)
  })
  
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((posts) => {});
  };

  const deletePost = (postId) => {};
 


  return (
    <PostContext.Provider value={{ posts, setPosts, deletePost, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;