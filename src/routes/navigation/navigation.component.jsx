import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as StacysLogo } from '../../assets/six-pointed-star-svgrepo-com.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div class="navigation">
          <Link class='logo-container' to='/'>
            <StacysLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to="/shop">
                  Shop
              </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;