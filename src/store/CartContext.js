import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    addCartItem: (product, items) => {

    }
});

export default CartContext;