import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>Check Out Items</Button>
            </div>
        </div>
    )
}

export default CartDropdown;