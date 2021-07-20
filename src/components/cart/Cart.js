import useStore from "../../services/cartState";

const Cart = () => {

  const cart = useStore(state => state.cart);

  console.log(cart);

  return (
    <div>
      <h1>{cart.length}</h1>
    </div>
  )
};

export default Cart
