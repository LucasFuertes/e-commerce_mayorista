import "./Cart.css";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export const Cart = () => {
  const { cart, clearCart, cantidadTotal, total } = useContext(CartContext);
  console.log(cantidadTotal());
  console.log(`Datos del carrito ${cart}`);

  if (cantidadTotal === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="boton">
          Productos
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total: ${total()}</h3>
      <button onClick={() => clearCart()} className="boton">
        Limpiar el carrito
      </button>
      <Link to="/checkout" className="boton">
        Checkout
      </Link>
    </div>
  );
};
