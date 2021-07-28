import useStore from "../../services/cartState";
import { Link } from "react-router-dom";

const OrderSummary = props => {
  // retrieve method from shared state
  const clearCart = useStore(state => state.clearCart);
  // variable destructuring
  const { total } = props;
  
  return (
    <>
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
          <Link to="/">
            <button onClick={() => {clearCart()}}>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
      </div> 
    </>
  )
}

export default OrderSummary
