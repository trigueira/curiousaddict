import React, { Component } from "react";
import PostService from "../services/PostService";
import "./CreatePost.css";

export default class CreatePost extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      topic: "",
      content: "",
      image: "images/java/notes.png",
    };
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeTopicHandler = this.changeTopicHandler.bind(this);
    this.changeContentHandler = this.changeContentHandler.bind(this);
    this.createPost = this.createPost.bind(this);
    console.log(this.props);
  }

  createPost = (e) => {
    e.preventDefault();
    let post = {
      title: this.state.title,
      topic: this.state.topic,
      content: this.state.content,
      image: "images/java/notes.png",
    };
    console.log("post => " + JSON.stringify(post));
    console.log(this.props);
    PostService.createPost(post).then((res) => {
      //      this.props.history.push("/posts");
      //      window.location.href = "/posts";
    });
  };

  changeTitleHandler(event) {
    this.setState({ title: event.target.value });
  }

  changeTopicHandler(event) {
    this.setState({ topic: event.target.value });
  }

  changeContentHandler(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <div>
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
              value={this.state.title}
              onChange={this.changeTitleHandler}
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
              value={this.state.topic}
              onChange={this.changeTopicHandler}
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
              value={this.state.content}
              onChange={this.changeContentHandler}
            />
          </div>
          <button className="form-input-btn" onClick={this.createPost}>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}
