function Pizza({ pizza }) {
  // if (pizza.soldOut) return null;
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </div>
  );
}

export default Pizza;
