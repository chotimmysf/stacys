import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`Person wearing our ${name}`} />
            </div>
            <h2 className='name'>{name}</h2>
            <h2 className='quantity'>{quantity}</h2>
            <h2 className='price'>${price}</h2>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;