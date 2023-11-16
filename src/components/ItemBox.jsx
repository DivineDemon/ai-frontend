import { RiRobot2Line } from "react-icons/ri";

const ItemBox = ({ item }) => {
  return (
    <div
      className={`${item.gradient} ${item.color} rounded-lg flex flex-col items-center justify-center space-y-4 p-5 cursor-pointer shadow-md hover:shadow-xl transition-transform transform hover:scale-105`}>
      <RiRobot2Line className={`${item.color} w-10 h-10`} />
      <span className="text-md md:text-xl font-semibold underline underline-offset-4">
        {item.name}
      </span>
      <span className="text-sm font-semibold text-center">
        {item.description}
      </span>
    </div>
  );
};

export default ItemBox;
