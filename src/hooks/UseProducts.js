import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => useContext(ProductContext);

export default useProducts;
