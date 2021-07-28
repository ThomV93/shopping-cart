import Credits from "./Credits";
import pokeball from "../../Images/pokeball.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Welcome to Poké Antiques</h1>
        <h3>Join our nostalgic community dedicated to the first Pokémon TCG sets</h3>
        <Credits/>
      </div>
      <div className="image-container">
        <img src={pokeball} alt="Pokeball" />
      </div>
    </div>
  )
};

export default Home
