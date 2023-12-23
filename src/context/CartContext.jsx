import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

     return (
        <CartContext.Provider value={'carts data'}>
            {children}
        </CartContext.Provider>
     )
}

export default CartContextProvider