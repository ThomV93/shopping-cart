import useStore from "../../services/cartState";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "./cart.scss";

const Cart = () => {
  // extract cart from shared state
  const cart = useStore(state => state.cart);
  // total price of goods
  const total = cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2);

  return (
    <div className="cart">
      <div className="cart-items-container">
        <h1>Shopping Cart</h1>
        {cart.map((item, i) => (
          <CartItem item={item} key={item.id} i={i}/>
        ))}
      </div>
      <OrderSummary total={total}/>
    </div>
  )
};

export default Cart
