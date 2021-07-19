const CardPrices = props => {

  const { 
    high, 
    market, 
    low 
  } = props.priceInfo;

  return (
    <div className="price-section">
      <div className="price-container">
        <h3>High Market</h3>
        <p className="high-price">${high === undefined ? "..." : high}</p>
      </div>
      <div className="price-container">
        <h3>Market</h3>
        <p>${market === undefined ? "..." : market}</p>
      </div>
      <div className="price-container">
        <h3>Low Market</h3>
        <p className="low-price">${low === undefined ? "..." : low}</p>
      </div>
    </div>
  )
}

export default CardPrices
