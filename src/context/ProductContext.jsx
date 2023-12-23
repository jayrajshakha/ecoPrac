import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  // Products State
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Fetch Products

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);

    const fetchApi = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const results = await res.json();

      try {
        setLoading(false);
        setData(results);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <ProductContext.Provider value={[data, loading, error]}>
      {children}
    </ProductContext.Provider>
  );
};
