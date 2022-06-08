import ProductItem from './ProductItem';

const ProductsList = (props) => {
    
    const list = props.products.map(product => {
        return(
            <ProductItem key={product.id} id={product.id} name={product.ProductName} price={product.UnitPrice} stock={product.UnitsInStock} suppliers={product.Suppliers}/>
        )
    })

    return list;
};

export default ProductsList;
