import { useEffect, useState } from "react";
import "../../styles.css";
import verGalletas from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [galletas, setGalletas] = useState([]);

  useEffect(() => {
    verGalletas()
      .then((response) => {
        setGalletas(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="titulo-principal txt-white">{greeting}</h1>
      <ItemList gallets={galletas} />
    </div>
  );
};

export default ItemListContainer;
