import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos!"} />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
