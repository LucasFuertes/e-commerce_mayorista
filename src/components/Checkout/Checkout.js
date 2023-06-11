import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total(),
        date: serverTimestamp(),
      };

      const db = getFirestore();

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "Products");

      const productsFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productCart = cart.find((prod) => prod.id === doc.id);
        const prodCantidad = productCart?.cantidad;

        if (stockDb >= prodCantidad) {
          batch.update(doc.ref, { stock: stockDb - prodCantidad });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "Orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
