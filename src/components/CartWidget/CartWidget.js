import cart from "./assets/cart.png";
import "../../styles.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="txt-white"
      style={{ display: cantidadTotal() > 0 ? "block" : "none" }}
    >
      <img src={cart} alt="cart-widget" />
      <p>{cantidadTotal()}</p>
    </Link>
  );
};

export default CartWidget;
