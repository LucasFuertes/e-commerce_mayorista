import "./Cart.css";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export const Cart = () => {
  const { cart, clearCart, cantidadTotal, total } = useContext(CartContext);
  console.log(cantidadTotal());
  console.log(`Datos del carrito ${cart}`);

  if (cantidadTotal() === 0) {
    return (
      <div className="text-center">
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="boton">
          <button className="productos-inicio">Productos</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3 style={{ textAlign: "center" }}>Total: ${total()}</h3>
      <div className="opciones">
        <button onClick={() => clearCart()} className="botones">
          Limpiar el carrito
        </button>
        <Link to="/checkout" className="botones">
          <button className="checkout">Checkout</button>
        </Link>
      </div>
    </div>
  );
};
