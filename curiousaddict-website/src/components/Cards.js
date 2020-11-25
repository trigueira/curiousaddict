import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import pennicillin from '../images/curiosities/penicillin.jpg';
import neuroplasticity from '../images/curiosities/neuroplasticity.jpg';
import blackFootedCat from '../images/curiosities/black-footed-cat.jpg';
import globalWarming from '../images/curiosities/global-warming.jpg';
import hippocampus from '../images/curiosities//hippocampus.jpg';


function Cards() {
  return (
    <div className="cards">
      <h1>Did you know . . .</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={pennicillin}
              text="Alexander Fleming discovered Penicillin accidentally in 1928. Today is the most widely used antibiotic in the world!"
              label="SCIENCE"
              alt="Petry dish with a blue-green mold(Penicillium notatum) and a clear ring surrounding the mold where the bacteria are unable to grow"
              path="/curiosities"
            />
            <CardItem
              src={neuroplasticity}
              text="New brain connections are created every time we form a memory. And when we learn something new the structure of the brain changes!"
              label="BRAIN"
              alt="Funny draw of a brain doing different activities to keep in 'shape'"
              path="/curiosities"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src={blackFootedCat}
              text="The black-footed cat is the smallest (max of 20in/51cm long) but the deadlist wild cat, capturing more prey in a single night than a leopard does in six months!"
              label="NATURE"
              alt="Black-footed cat with a prey on his mouth"
              path="/curiosities"
            />
            <CardItem
              src={globalWarming}
              text="Global Warming has raised the earth's average surface temperature of about 1ºC/1.8ºF since the beginning of the Industrial Revolution!"
              label="ENVIRONMENT"
              alt="Polar bear wetted standing in a small portion of ice surronded by water"
              path="/curiosities"
            />
            <CardItem
              src={hippocampus}
              text="We can't remember much of our first few years because the hippocampus wasn't developed enough to build a rich memory of an event!"
              label="BRAIN"
              alt="A MRI (Magnetic Resonance Imaging) of a Human brain highlighting the anterior and posterior hippocampus region"
              path="/curiosities"
            />
          </ul>
        </div>
      </div>
      <h1>
        Before you go, check the <a href="./about">about section</a> :)
      </h1>
    </div>
  );
}

export default Cards;
