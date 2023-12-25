import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // total

  useEffect(() => {
    const totalPrice = cart?.reduce((a, b) => {
      return a + b.price * b.amount;
    }, 0);
    setTotal(totalPrice);
  });

  // addAmount

  useEffect(() => {
    if (cart) {
      const a = cart.length;
      setTotalAmount(a);
    }
  }, [cart]);

  // Add Carts

  const addCarts = (productsDetails, id) => {
    const newItem = { ...productsDetails, amount: 1 };

    const sameItems = cart.find((f) => {
      return f.id === id;
    });

    if (sameItems) {
      const updatedItems = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: sameItems.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedItems);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeCarts = (id) => {
    const newCarts = cart.filter((f) => {
      return f.id !== id;
    });
    setCart(newCarts);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseItem = (id) => {
    const newItem = cart.map((i) => {
      return i.id === id ? { ...i, amount: i.amount + 1 } : i;
    });
    setCart(newItem);
  };

  const deacreaseItem = (id) => {
    const neWItem = cart.map((i) => {
      return i.id === id
        ? { ...i, amount: i.amount > 1 ? i.amount - 1 : (i.amount = 1) }
        : i;
    });
    setCart(neWItem);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCarts,
        removeCarts,
        clearCart,
        increaseItem,
        deacreaseItem,
        totalAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
