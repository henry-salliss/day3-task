import { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [amount, setAmount] = useState(0)

    const addCartItem = (product) => {
        // check exists already
        const exists = cartItems.some(item => {
            return item.id === product.id
        })
        
        if(exists) {
            const existingItem = cartItems.find(item => item.id === product.id)
            existingItem.quantity++
            const updatedItem = existingItem;
            const filteredItems = cartItems.filter(item => item.id !== existingItem.id)
            setCartItems([...filteredItems, updatedItem])
            setTotal(total + product.price)
            setAmount(amount + 1)
            return;
        }

            const newCart = [...cartItems, product]
            setCartItems(newCart)
            setTotal(total + product.price)
            setAmount(amount + 1)


    };

    const removeCartItem = (id) => {
        const itemToRemove = cartItems.find(item => item.id === id)
        const moneyOff = itemToRemove.quantity * itemToRemove.price;
        const newCart = cartItems.filter(item => item.id !== id)
        setCartItems(newCart)
        setTotal(total - moneyOff)
        setAmount(amount - itemToRemove.quantity)
    }

    return(
        <CartContext.Provider value={{
            cartItems: cartItems,
            addCartItem: addCartItem,
            removeCartItem: removeCartItem,
            total: total,
            amount: amount
        }}>
            {props.children}
        </CartContext.Provider>
    )
}