import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "Products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productConverted = { id: response.id, ...data };
        setProducto(productConverted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div className="detalles">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
