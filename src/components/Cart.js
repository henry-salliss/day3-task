import styles from './Cart.module.css'

const Cart = () => {
    const cartItems = 0;
    return(
        <div className={styles.cart}>
            {cartItems}
            <p>Total</p>
            <button>Order</button>
        </div>
    )
}

export default Cart;