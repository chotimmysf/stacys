import { useContext } from 'react';

import './product-card.styles.scss';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`Person wearing our ${name}`}/>
            <div className='footer'>
                <h2 className='name'>{name}</h2>
                <h2 className='price'>${price}</h2>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;