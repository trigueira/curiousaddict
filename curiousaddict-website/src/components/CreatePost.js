import React, { Component } from "react";
import "./CreatePost.css";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    this.props.history.push("/create-post");
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form className="form">
            <h1>New Post . . More Knowledge . . Keep Growing :)</h1>
            <div className="form-inputs">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                className="form-input"
                placeholder="What is it about?"
              />
              <label htmlFor="topic" className="form-label">
                Topic
              </label>
              <input
                id="topic"
                type="text"
                name="topic"
                className="form-input"
                placeholder="Where it belong?"
              />
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <input
                id="content"
                type="text"
                name="content"
                className="form-input"
                placeholder="Let's save this knowledge!"
              />
            </div>
            <button className="form-input-btn" type="submit">
              Create Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}
