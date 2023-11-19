import Layout from "./components/Layout";
import Banner from "./components/Banner";
import ItemGrid from "./components/ItemGrid";

import { useSelector } from "react-redux";

const App = () => {
  const { itemList } = useSelector((state) => state.item);

  return (
    <Layout>
      <Banner />
      <ItemGrid itemList={itemList} className="text-" />
    </Layout>
  );
};

export default App;
