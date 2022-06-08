import { useContext } from 'react';
import CartContext from '../store/CartContext';
import styles from './Header.module.css';

const Header = () => {
    const context = useContext(CartContext);
    console.log(context.amount)

    return(
        <div className={styles.header}>
            <h1>Shopping App</h1>
            <p>Cart <span>{context.amount}</span></p>
        </div>
    )
}

export default Header;