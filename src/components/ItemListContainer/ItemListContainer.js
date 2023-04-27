import "../../styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="titulo-principal txt-white">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
