import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"¡Bienvenidos!"} />} />
          <Route path='categoria/:categoriaId' element= {<ItemListContainer/>}/>
          <Route path='item/:itemId' element= {<ItemDetailContainer/>}/>
          <Route path='*' element= {<h1> 404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
