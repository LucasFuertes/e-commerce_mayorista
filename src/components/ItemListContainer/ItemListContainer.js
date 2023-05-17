import { useEffect, useState } from "react";
import "../../styles.css";
import { verProductos, verProductoCategoria } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {

    const asyncFunc = categoriaId ? verProductoCategoria : verProductos

    asyncFunc(categoriaId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h1 className="titulo-principal txt-white">{greeting}</h1>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
