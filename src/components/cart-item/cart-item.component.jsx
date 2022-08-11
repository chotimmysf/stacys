import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const { name, quantity } = cartItem;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{quantity}</h2>
        </div>
    )
}

export default CartItem;