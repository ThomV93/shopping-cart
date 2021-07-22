import useStore from "../../services/cartState";

const Cart = () => {

  const cart = useStore(state => state.cart);

  console.log(cart);

  return (
    <div className="cart">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="title-container">
        </div>
        {cart.map(item => (
          <div key={item.id}>
            <div className="info-container">
              <img src={item.image} alt={item.name}/>
              <div>
                <p>Name: {item.name}</p>
                <p>Set: {item.setName}</p>
                <p>Released: {item.setDate}</p>
              </div>
            </div>
            <p>{item.price}</p>
            <p>{item.amount}</p>
            <p>{item.price * item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Cart
