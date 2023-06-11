import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if(!isInCart(item.id)){
      setCart(prodExists => [...prodExists, {...item, cantidad}]);
    } else {
      console.error('El producto ya fue agregado al carrito');
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  const cantidadTotal = () => {
    const cantidadCart = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    return cantidadCart;
  }

  const total = () => {
    const precioTotal = cart.reduce((acumulador, item) => acumulador + item.price * item.cantidad, 0);
    return precioTotal;
  }

  return(
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cantidadTotal, total}}>{children}</CartContext.Provider>
  );
}