const CartItem = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
        </div>
    )
};

export default CartItem;