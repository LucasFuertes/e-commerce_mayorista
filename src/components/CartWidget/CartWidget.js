import cart from "./assets/cart.png";
import "../../styles.css";

const CartWidget = () => {
  return (
    <div className="txt-white">
      <img src={cart} alt="cart-widget" />0
    </div>
  );
};

export default CartWidget;
