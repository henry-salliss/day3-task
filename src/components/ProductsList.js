import styles from './ProductsList.module.css';

const ProductsList = (props) => {
    
    const list = props.products.map(product => {
        const suppliers = product.Suppliers.map(supp => {
            return(
                <p>{supp.CompanyName}</p>
            )
        })
        return(
            <li className={styles.product} key={Math.random() * 1000}>
                <p>{product.ProductName}</p>
                <p>£{product.UnitPrice}</p>
                <p>Items in stock: {product.UnitsInStock}</p>
                <div>
                    <p>Supplied from:</p>
                    {suppliers}
                </div>
                <button className={styles.btn}>Add to cart</button>
            </li>
        )
    })

    return list;
};

export default ProductsList;