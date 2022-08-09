import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as StacysLogo } from '../../assets/six-pointed-star-svgrepo-com.svg';
import './navigation.styles.scss';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utilities/firebase/firebase.utilities";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <nav className="navigation">
            <div className="logo-container">
              <StacysLogo className="logo" />
            </div>
          <div className="nav-links-container">
              <Link className="nav=link" to='/home'>
                Home
              </Link>
              <Link className="nav-link" to="/shop">
                  Shop
              </Link>
              { currentUser ? (
                  <span className='nav-link' onClick={signOutUser}>
                    Sign Out
                    </span>
                ) : (
                  <Link className="nav-link" to="/auth">
                    Sign In
                  </Link>
                )
              }
              <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </nav>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;