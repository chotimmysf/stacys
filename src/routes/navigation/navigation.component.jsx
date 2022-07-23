import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as StacysLogo } from '../../assets/six-pointed-star-svgrepo-com.svg';
import './navigation.styles.scss';

const Navigation = () => {
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
              <Link className="nav-link" to="/auth">
                  Your Stars Rewards
              </Link>
          </div>
        </nav>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;