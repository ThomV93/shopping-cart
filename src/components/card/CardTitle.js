const CardTitle = props => {
  // variable destructuring
  const {
    name,
    type,
    subtype,
    description
  } = props.title;

  return (
    <>
      <div className="title-section">
        <h1>{name}</h1>
        <p>{type} - {subtype}</p>
      </div>
      <div className="description-section">
        <p>{description}</p>
      </div>
    </>
  )
};

export default CardTitle
