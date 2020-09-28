import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out it</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/plants-edited.jpg"
              text="Hi! I am the person behind Curious Addict"
              label="JAVA"
              path="/contact"
            />
            <CardItem
              src="images/plants-edited.jpg"
              text="Hi! I am the person behind Curious Addict"
              label="JAVA"
              path="/contact"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/plants-edited.jpg"
              text="Hi! I am the person behind Curious Addict"
              label="REACT"
              path="/contact"
            />
            <CardItem
              src="images/plants-edited.jpg"
              text="Hi! I am the person behind Curious Addict"
              label="REACT"
              path="/contact"
            />
            <CardItem
              src="images/plants-edited.jpg"
              text="Hi! I am the person behind Curious Addict"
              label="REACT"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
