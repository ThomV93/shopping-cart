import { Link } from "react-router-dom";
import useStore from "../../services/cartState";
import "./navbar.scss";

const Navbar = () => {
  // retrieve cart array from shared state
  const cart = useStore(state => state.cart);

  return (
    <div className="navbar">
      <h1>Poké Antiques</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart <span>({cart.length})</span></li>
        </Link>
      </ul>
    </div>
  )
};

export default Navbar
