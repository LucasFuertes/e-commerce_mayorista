import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos!"} />
      <ItemCount
        existencias={10}
        cantInicial={1}
        agregar={(cantidad) =>
          console.log(`Cantidad de artículos seleccionados: ${cantidad}`)
        }
      />
    </>
  );
}

export default App;
