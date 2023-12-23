import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./style/global.css";
import { ProductContext, CartContext, SidebarContext } from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContext>
    <SidebarContext>
      <ProductContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContext>
    </SidebarContext>
  </CartContext>
);
