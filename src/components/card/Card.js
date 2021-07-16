import React, { useState, useEffect } from "react";
import "./card.scss";

const Card = ({ match }) => {
  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const data = await fetch(`https://api.pokemontcg.io/v2/cards/${match.params.id}`);

    const item = await data.json();
    console.log(item);
    setItem(item.data);
  };

  return (
    <div className="card">
      <img src={item.images.large} alt={item.name}/>
    </div>
  )
};

export default Card
