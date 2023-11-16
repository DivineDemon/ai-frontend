import ItemBox from "./ItemBox";

const ItemGrid = ({ itemList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto max-w-[80%] xl:max-w-[50%]">
      {itemList.map((item) => (
        <ItemBox item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemGrid;
