import styles from './ProductItem.module.css';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

const ProductItem = (props) => {
    const context = useContext(CartContext)

    const submitHandler = () => {
        context.addCartItem({
            name: props.name,
            price: props.price,
            id: props.id
        })
    }

    const suppliers = props.suppliers.map(supp => {
        return(
            <p key={props.id}>{supp.CompanyName}</p>
        )
    })
    return(
        <li className={styles.product} key={props.id}>
            <p>{props.name}</p>
            <p>£{props.price}</p>
            <p>Items in stock: {props.stock}</p>
            <div>
                <p>Supplied from:</p>
                {suppliers}
            </div>
            <button onClick={submitHandler} className={styles.btn}>Add to cart</button>
        </li>
    )
}

export default ProductItem;