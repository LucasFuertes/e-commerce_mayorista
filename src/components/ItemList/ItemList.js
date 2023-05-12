import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ gallets }) => {
  return (
    <div className="lista">
      {gallets.map((cookies) => (
        <Item key={cookies.id} {...cookies} />
      ))}
    </div>
  );
};

export default ItemList;
