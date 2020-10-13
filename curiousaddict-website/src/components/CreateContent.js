import React, { Component } from "react";
import ContentService from "../services/ContentService";
import "./CreateContent.css";

export default class CreatePost extends Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
    };
    this.changeContentHandler = this.changeContentHandler.bind(this);
    this.createContent = this.createContent.bind(this);
    console.log(this.props);
  }

  createContent = (e) => {
    e.preventDefault();
    let post = {
      content: this.state.content,
    };
    console.log("content => " + JSON.stringify(post));
    console.log(this.props);
    ContentService.createContent(post).then((res) => {
      //      this.props.history.push("/posts");
      //      window.location.href = "/posts";
    });
  };

  changeContentHandler(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <div className="about-container">
        <h1>What is it?</h1>
        <p>
          Well, I am a curious for so many different topics and this is only a
          very simple web app that I created to play with React and SpringBoot
          :) <br></br> Bellow it is a CRUD functions that you can play around.
        </p>
        <form className="form">
          <div className="form-inputs">
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
        <p className="notice">
          NOTE: Please be aware that anyone that can access to it can play with
          it. So don't introduce any relevant data here, as anyone can read,
          delete or update.
        </p>
      </div>
    );
  }
}
