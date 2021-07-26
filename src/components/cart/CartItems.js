import useStore from "../../services/cartState";
import minus from "../../Images/minus.svg";
import plus from "../../Images/plus.svg";
import xCircle from "../../Images/x-circle.svg";

const CartItem = props => {
  const removeCard = useStore(state => state.removeCard);

  const {
    image,
    id,
    name,
    setName,
    setDate,
    price,
    amount,
  } = props.item;

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
              <img src={minus} alt="minus"/>
              <p>{amount}</p>
              <img src={plus} alt="plus"/>
            </div>
          </div>
        </div>
        <div className="price-container">
          <img onClick={() => {removeCard(id)}} src={xCircle} alt="x-circle"/>
          <p>$ {price * amount}</p>
        </div>
      </div>
    </>
  )
}

export default CartItem
