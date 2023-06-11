import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../contexts/CartContext/CartContext";

const CartItem = ({ id, title, price, cantidad }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container cart">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>Cantidad: {cantidad} unidades</p>
        <p>Precio: ${price}</p>
        <p>Subtotal ${cantidad * price}</p>
      </div>
      <div>
        <button onClick={() => removeItem(id)} className="eliminar">
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
