import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data.js";

function Menu() {
  const pizzaList = pizzaData.map((pizza) => {
    return <Pizza key={pizza.name} pizza={pizza} />;
  });

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from oue stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">{pizzaList}</ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

export default Menu;
