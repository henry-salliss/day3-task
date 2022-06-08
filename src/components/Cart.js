import React, { useContext } from "react"
import CartContext from "../store/CartContext"
import CartItem from "./CartItem";
import styles from './Cart.module.css'

const Cart = () => {
    const context = useContext(CartContext);
    const cartItems = context.cartItems.map(item => {
        return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity}/>
    })
    return(
        <React.Fragment>
            {cartItems.length > 0 &&
            <React.Fragment>
            <div className={styles.cartHeader}>
            <h3>Cart</h3>
            <p>Total £{context.total}</p>
            </div>
            <div className={styles.cart}>
                {cartItems}
            </div>
            </React.Fragment> 
            }
        </React.Fragment>
    )
}

export default Cart;