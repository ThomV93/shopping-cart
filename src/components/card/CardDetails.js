const CardDetails = props => {

  const {
    hp,
    level,
    setName,
    setSeries,
    pokedexNum,
    cardNum,
    printedTotal,
    artist,
    rarity
  } = props.details;

  return (
    <div className="info-section">
      <div>
        <h3>HP</h3>
        <p>{hp}</p>
        <h3>Level</h3>
        <p>{level}</p>
      </div>
      <div>
        <h3>Set Name</h3>
        <p>{setName}</p>
        <h3>Set Series</h3>
        <p>{setSeries}</p>
      </div>
      <div>
        <h3>Pokédex Nº</h3>
        <p>{pokedexNum}</p>
        <h3>Card Nº</h3>
        <p>{cardNum}/{printedTotal}</p>
      </div>
      <div>
        <h3>Artist</h3>
        <p>{artist}</p>
        <h3>Rarity</h3>
        <p>{rarity}</p>
      </div>
    </div>
  )
}

export default CardDetails