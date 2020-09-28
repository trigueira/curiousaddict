import React, { Component } from "react";
import PostService from "../services/PostService";
import CardItem from "./CardItem";
import "./Cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    PostService.getPosts().then((response) => {
      this.setState({ posts: response.data });
    });
  }

  render() {
    return (
      <div className="cards">
        <h1>Check out it</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__item">
              {this.state.posts.map((post) => (
                <CardItem
                  key={post.id}
                  src={post.image}
                  text={post.title}
                  label={post.topic}
                  path="/posts"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
