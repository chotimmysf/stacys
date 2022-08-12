import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`Model wearing our ${name}`} />
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <h2 className='price'>{quantity} x ${price}</h2>
            </div>
        </div>
    )
}

export default CartItem;