import React from "react";
import "./home.scss";
import pokeball from "../../Images/pokeball.png";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Welcome to Poké Antiques</h1>
        <h3>Join our nostalgic community dedicated to the first Pokémon TCG sets</h3>
        <div>
          <p>Created by Thomas Veit</p>
          <p>built with Pokémon TCG API</p>
        </div>
      </div>
      <div className="image-container">
        <img src={pokeball} alt="Pokeball" />
      </div>
    </div>
  )
};

export default Home
