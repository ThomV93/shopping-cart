import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

const Cards = ({ match }) => {
  // retrieve relevant data from api
  useEffect(() => {
    const fetchCards = async () => {
      // use router provided props for the API request
      const data = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${match.params.id}`);
      const cards = await data.json();
      setCards(cards.data);
    };
    fetchCards();
  }, [match.params.id]);

  const [cards, setCards] = useState([]);

  return (
    <div className="cards">
      <div className="card-container">
        {cards.map(item => (
          <Link key={item.id} to={`/card/${item.id}`}>
            <img src={item.images.small} alt={item.name}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cards