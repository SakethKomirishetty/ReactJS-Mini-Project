import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from "../../redux/slices/userLoginSlice";
//import { loginStatus } from './path-to-file';


function Header() {
   const {currentUser, loginStatus } = useSelector((state) => state.userLogin);
// const currentUser = useSelector(state => state.auth.user.currentUser);

    let dispatch=useDispatch()


    function signout(){
      //remove token from browser stotage
      sessionStorage.removeItem('token')
      //reset state
      let action=resetState()
      dispatch(action)
    }

  return (
    <nav
      className="navbar navbar-expand-sm fs-5 shadow-sm"
      
    >
      <div className="container-fluid">
        <Link className="navbar-brand">
          <img src={Logo} alt="" width="60px" className="rounded" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loginStatus === false ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to=""
                    style={{ color: "var(--light-grey)" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="signup"
                    style={{ color: "var(--light-grey)" }}
                  >
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="signin"
                    style={{ color: "var(--light-grey)" }}
                  >
                    SignIn
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="signin"
                  style={{ color: "var(--light-grey)" }}
                  onClick={signout}
                >
                   <span className="lead  fs-4 me-3 fw-1"  style={{ color: "var(--yellow)" ,fontWeight:'',fontSize:'1.3rem',textTransform:'capitalize',fontFamily:'fantasy'}}>{currentUser.username}
                   <sup style={{color:'var(--medium-grey)',fontSize:'1rem'}}>({currentUser.userType})</sup>
                   </span>
                  Signout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;