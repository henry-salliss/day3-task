import { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // const context = useContext(CartContext)

    const addCartItem = (product) => {
        const newCart = [...cartItems, product]
        console.log(newCart)
        setCartItems(newCart)
    };

    return(
        <CartContext.Provider value={{
            cartItems: cartItems,
            addCartItem: addCartItem
        }}>
            {props.children}
        </CartContext.Provider>
    )
}