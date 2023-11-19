import App from "./App.jsx";
import { store } from "./store";
import "./assets/css/index.css";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
);
