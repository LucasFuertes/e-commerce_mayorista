import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../contexts/CartContext/CartContext";

const CartItem = ({ id, nombre, precioUnid, cantidad }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container cart">
      <div>
        <h2>{nombre}</h2>
      </div>
      <div>
        <p>Cantidad: {cantidad} unidades</p>
        <p>Precio: ${precioUnid}</p>
        <p>Subtotal ${cantidad * precioUnid}</p>
      </div>
      <div>
        <button onClick={() => removeItem(id)} className="boton">
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
