const OrderSummary = props => {
  const {total} = props;
  
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
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div> 
    </>
  )
}

export default OrderSummary
