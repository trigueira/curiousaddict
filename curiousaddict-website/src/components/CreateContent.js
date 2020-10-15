import React, { Component } from "react";
import ContentService from "../services/ContentService";
import "./CreateContent.css";

export default class CreateContent extends Component {
  constructor(props) {
    super();
    this.state = {
      dbContent: [],
    };
  }
  render() {
    return (
      <div className="about-container">
        <h1>What is it?</h1>
        <p>
          I am also curious about programming, and this is a very simple web app
          that I created to play with React and SpringBoot :) <br></br> Bellow
          it is a table where you add a new content, edit or delete existent
          content.
        </p>
        <div className="new-content">
          <input value="Write anything here and press 'ADD''"></input>
          <button className="add-btn">ADD</button>
        </div>
        <table>
          <thead>
            <tr className="table__header">
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="123"></tr>
          </tbody>
        </table>
        <p className="notice">
          NOTE: Please be aware that anyone that can access to it can play with
          it. So don't introduce any relevant data here, as anyone can read,
          delete or update.
        </p>
      </div>
    );
  }
}
