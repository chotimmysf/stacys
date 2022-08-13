import './checkout.styles.scss';
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <h1>CHECK OUT Your Stacy's Items!</h1>
            <div className="checkout-header">
                <div className="header-block">
                    <h2>Product</h2>
                </div>
                <div className="header-block">
                    <h2>Item</h2>
                </div>
                <div className="header-block">
                    <h2>Quantity</h2>
                </div>
                <div className="header-block">
                    <h2>Price</h2>
                </div>
                <div className="header-block">
                    <h2>Remove</h2>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem;
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        );
                    })
                }
            <h2 className='total'>Total: $0</h2>    
        </div>
    );
};

export default Checkout;