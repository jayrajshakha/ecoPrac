import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./style/global.css";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
