import React, { useContext } from "react"
import CartContext from "../store/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const context = useContext(CartContext);
    console.log(context)

    const cartItems = context.cartItems.map(item => {
        return <CartItem key={item.id} name={item.name} price={item.price}/>
    })
    console.log('hello')
    return(
        <React.Fragment>
        <h1>Cart</h1>
        <div>
            {cartItems}
        </div>
        </React.Fragment>
    )
}

export default Cart;