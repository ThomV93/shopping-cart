import { useState, useEffect } from "react";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import CardPrices from "./CardPrices";
import useStore from "../../services/cartState";
import "./card.scss";

const Card = ({ match }) => {
  // retrieve relevant data from api
  useEffect(() => {
    const fetchItem = async () => {
      // use router provided props in the request
      const data = await fetch(`https://api.pokemontcg.io/v2/cards/${match.params.id}`);
      const item = await data.json();
      setItem(item.data);
    };
    fetchItem();
  }, [match.params.id]);

  const [item, setItem] = useState({
    images: {},
    tcgplayer: {
      prices: {
        obj: {},
      },
    },
    subtypes: [],
    set: {},
  });

  // -------- Data Organization section ------ // 

  const title = {
    name: item.name,
    type: item.supertype,
    subtype: item.subtypes === undefined ? "n/a" : item.subtypes[0],
    description: item.flavorText,
  };

  const details = {
    hp: item.hp === undefined ? "n/a" : item.hp,
    level: item.level === undefined ? "n/a" : item.level,
    setName: item.set.name,
    setSeries: item.set.series,
    pokedexNum: item.nationalPokedexNumbers === undefined ? "n/a" : item.nationalPokedexNumbers[0],
    cardNum: item.number,
    printedTotal: item.set.printedTotal,
    artist: item.artist,
    rarity: item.rarity,
  };
  
  const prices = item.tcgplayer.prices;
  const priceInfo = {
    low: prices[Object.keys(prices)[0]].low,
    market: prices[Object.keys(prices)[0]].market,
    high: prices[Object.keys(prices)[0]].high,
  };

  const cartItem = {
    id: item.id,
    image: item.images.small,
    name: item.name,
    setName: item.set.name,
    setDate: item.set.releaseDate,
    price: prices[Object.keys(prices)[0]].market,
    amount: 1,
    increaseAmount: () => {cartItem.amount++},
  };

  // extract shared state
  const cart = useStore(state => state.cart);
  const addCard = useStore(state => state.addCard);

  // check cart before pushing new item
  const SendToCart = () => {
    let index = cart.findIndex(card => card.name === cartItem.name);
    const selectedItem = cart.filter(card => card.name === cartItem.name);
    index === -1 ? addCard(cartItem) : selectedItem[0].increaseAmount();
  };

  return (
    <div className="card">
      <img src={item.images.large} alt={item.name}/>
      <div className="card-details">
        <CardTitle title={title}/>
        <h2>Details</h2>
        <CardDetails details={details}/>
        <h2>Prices</h2>
        <span>Last Updated {item.tcgplayer.updatedAt}</span>
        <CardPrices priceInfo={priceInfo}/>
        <button onClick={() => SendToCart()}>Add to Cart</button>
      </div>
    </div>
  )
};

export default Card
