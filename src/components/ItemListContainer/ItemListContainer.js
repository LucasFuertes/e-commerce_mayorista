import { useEffect, useState } from "react";
import "../../styles.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = categoriaId
      ? query(
          collection(db, "Products"),
          where("categoryId", "==", categoriaId)
        )
      : collection(db, "Products");

    getDocs(collectionRef)
      .then((response) => {
        const prodsConverted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(prodsConverted);
      })
      .catch((error) => {
        console.log(error);
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
