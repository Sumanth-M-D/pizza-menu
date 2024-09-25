function Order(props) {
  return (
    <div className="order">
      <p>we are open until {props.closeHour}. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Close(props) {
  return (
    <div>
      <p>Sorry we are currently closed. We will open at {props.openHour}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <Close openHour={openHour} />}
    </footer>
  );
}

export default Footer;
