import useStore from "../../services/cartState";
import xCircle from "../../Images/x-circle.svg";
import plus from "../../Images/plus.svg";
import minus from "../../Images/minus.svg";
import "./cart.scss";

const Cart = () => {

  // extract cart from shared state
  const cart = useStore(state => state.cart);
  // total price of goods
  const total = cart.reduce((a, b) => a + b.price, 0).toFixed(2);

  return (
    <div className="cart">
      <div className="cart-items-container">
        <h1>Shopping Cart</h1>
        {cart.map(item => (
          <div className="item-container" key={item.id}>
            <div className="info-container">
              <img className="card" src={item.image} alt={item.name}/>
              <div>
                <p>Name <span>{item.name}</span></p>
                <p>Set <span>{item.setName}</span></p>
                <p>Released <span>{item.setDate}</span></p>
                <p>Price <span>$ {item.price}</span></p>
                <div className="amount-container">
                  <img src={minus} alt="minus"/>
                  <p>{item.amount}</p>
                  <img src={plus} alt="plus"/>
                </div>
              </div>
            </div>
            <div className="price-container">
              <img src={xCircle} alt="x-circle"/>
              <p>$ {item.price * item.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
          <h1>Order Summary</h1>
          <div className="subtotal-container">
            <div className="value-container">
              <p>Order value</p>
              <p>$ {total}</p>
            </div>
            <div className="value-container">
              <p>Delivery</p>
              <p>Free</p>
            </div>
          </div>
          <div>
            <div className="value-container">
              <p>Total</p>
              <p>$ {total}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
    </div>
  )
};

export default Cart
