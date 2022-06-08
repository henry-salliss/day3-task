import { useState, Fragment, useEffect } from 'react';
import ProductsList from './ProductsList';
import styles from './Products.module.css'

const Products = () => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4001/products')
    .then(response => {
        if(!response.ok){
            throw Error('Could not get data');
        }
        return response.json();
    }).then(data => {
        setIsLoading(false);
        setProducts(data);
    }).catch(err => {
        setIsLoading(false)
        setError(err.message);
    });
    }, [])

    return(
        <Fragment>
            {products && <div className={styles.products}><ProductsList products={products}/></div>}
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
        </Fragment>
    )
}

export default Products;