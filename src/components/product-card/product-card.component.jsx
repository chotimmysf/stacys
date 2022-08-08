import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`Person wearing our ${name}`}/>
            <div className='footer'>
                <h2 className='name'>{name}</h2>
                <h2 className='price'>${price}</h2>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;