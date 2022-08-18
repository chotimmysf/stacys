import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`Person wearing our ${name}`} />
            </div>
            <h2 className='name'>{name}</h2>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <h2 className='value'>{quantity}</h2>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <h2 className='price'>${price}</h2>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;