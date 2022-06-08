import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <h1>Shopping App</h1>
            <p>Cart <span>1</span></p>
        </div>
    )
}

export default Header;