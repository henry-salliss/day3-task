import { useContext } from 'react';
import CartContext from '../store/CartContext';
import styles from './CartItem.module.css'

const CartItem = (props) => {
    const context = useContext(CartContext)
    const deleteHandler = () => {
        context.removeCartItem(props.id)
    }

    const addHandler = () => {
        context.addCartItem({
            name: props.name,
            price: props.price,
            id: props.id,
            quantity: 1
        })
    }


    return(
        <div className={styles.item}>
            <button onClick={deleteHandler} className={styles.delete}>X</button>
            <p>{props.name} x{props.quantity}</p>
            <p>£{props.price}</p>
            <button className={styles.add} onClick={addHandler}>+ add another</button>
        </div>
    )
};

export default CartItem;