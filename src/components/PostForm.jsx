import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [disabled, setDisabled] = useState(true);

  const [form, setForm] = useState({
    title: "",
    body: ""
  });

  useEffect(() => {
    if (form.body && form.title) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm(() => ({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(form);
    setForm({ title: "", body: "" });
  };

  return (
    <form className="ui form" onSubmit={() => this.handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input
          onChange={handleInputChange}
          value={form.title}
          type="text"
          name="title"
          placeholder="Post title"
        />
      </div>
      <div className="field">
        <label>Body</label>
        <textarea
          name="body"
          onChange={handleInputChange}
          rows="2"
          placeholder="Post body"
          value={form.body}
        ></textarea>
      </div>
      <button className="ui button" type="submit" disabled={disabled}>
        Publish
      </button>
    </form>
  );
};

export default PostForm;