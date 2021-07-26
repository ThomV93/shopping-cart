import useStore from "../../services/cartState";
import minus from "../../Images/minus.svg";
import plus from "../../Images/plus.svg";
import xCircle from "../../Images/x-circle.svg";

const CartItem = props => {
  // retrieve necessary state from shared state
  const removeCard = useStore(state => state.removeCard);
  const increaseAmount = useStore(state => state.increaseAmount);
  const decreaseAmount = useStore(state => state.decreaseAmount);

  // variable destructuring
  const {
    image,
    id,
    name,
    setName,
    setDate,
    price,
    amount,
  } = props.item;

  // item subtotal
  const subTotal = price * amount;

  return (
    <>
      <div className="item-container">
        <div className="info-container">
          <img className="card" src={image} alt={name}/>
          <div>
            <p>Name <span>{name}</span></p>
            <p>Set <span>{setName}</span></p>
            <p>Released <span>{setDate}</span></p>
            <p>Price <span>$ {price}</span></p>
            <div className="amount-container">
              <img onClick={() => {decreaseAmount(props.i)}} src={minus} alt="minus"/>
              <p>{amount}</p>
              <img onClick={() => {increaseAmount(props.i)}} src={plus} alt="plus"/>
            </div>
          </div>
        </div>
        <div className="price-container">
          <img onClick={() => {removeCard(id)}} src={xCircle} alt="x-circle"/>
          <p>$ {subTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default CartItem
