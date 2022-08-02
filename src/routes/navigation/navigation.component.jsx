import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as StacysLogo } from '../../assets/six-pointed-star-svgrepo-com.svg';
import './navigation.styles.scss';

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utilities";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
                  <a className='nav-link' onClick={signOutHandler}>
                    Sign Out
                    </a>
                ) : (
                  <Link className="nav-link" to="/auth">
                    Sign In
                  </Link>
                )
              }
          </div>
        </nav>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;