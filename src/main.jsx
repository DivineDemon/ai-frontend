import App from "./App.jsx";
import "./assets/css/index.css";

import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
