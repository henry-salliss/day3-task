import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    addCartItem: (product, items) => {
    
    },
    total : 0
});

export default CartContext;