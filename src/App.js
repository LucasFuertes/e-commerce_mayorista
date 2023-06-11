import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext/CartContext";
import { Cart } from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={true} />} />
            <Route
              path="categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
