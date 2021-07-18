import React, { useState, useEffect } from "react";
import "./card.scss";

const Card = ({ match }) => {
  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [item, setItem] = useState({
    images: {},
    tcgplayer: {
      prices: {
        obj: {},
      },
    },
    subtypes: [],
    set: {},
    nationalPokedexNumbers: [],
  });

  const fetchItem = async () => {
    const data = await fetch(`https://api.pokemontcg.io/v2/cards/${match.params.id}`);
    const item = await data.json();
    setItem(item.data);
  };

  const prices = item.tcgplayer.prices;
  const low = prices[Object.keys(prices)[0]].low;
  const market = prices[Object.keys(prices)[0]].market;
  const high = prices[Object.keys(prices)[0]].high;
  console.log(item);

  return (
    <div className="card">
      <img src={item.images.large} alt={item.name}/>
      <div className="card-details">
        <div className="title-section">
          <h1>{item.name}</h1>
          <p>{item.supertype} - {item.subtypes[0]}</p>
          <p>Set Nº: {item.number}/{item.set.printedTotal}</p>
          <p>Pokedex Nº: {item.nationalPokedexNumbers[0]}</p>
        </div>
        <div className="description-section">
          <h1>Description</h1>
          <p>{item.flavorText}</p>
        </div>
        <div>
          <h1>Info</h1>
          <p>Artist: {item.artist}</p>
          <p>Rarity: {item.rarity}</p>
          <p>HP: {item.hp}</p>
          <p>Level: {item.level}</p>
        </div>
        <div className="price-section">
          <h1>Prices</h1>
          <p>Last Updated</p>
          <div className="prices-wrapper">
            <div className="price-container">
              <p>Market</p>
              <p>${market === undefined ? "..." : market}</p>
            </div>
            <div className="price-container">
              <p>High Market</p>
              <p>${high === undefined ? "..." : high}</p>
            </div>
            <div className="price-container">
              <p>Low Market</p>
              <p>${low === undefined ? "..." : low}</p>
            </div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
};

export default Card
