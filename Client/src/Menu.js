import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DECONECT } from "./Actions/Types";

const Menu = () => {
  const dispatch = useDispatch();
  const deconnection = () => {
    dispatch({ type: DECONECT });
  };
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="topnav">
        <div className="topnav-centered">
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </div>
        <div className="topnav-left">
          <NavLink to="/HallOfFame" className="pictures">
            Hall of Fame
          </NavLink>
        </div>
        {auth.isAuth ? (
          <div>
            <div className="topnav-right">
              <NavLink to="/" onClick={deconnection}>
                Sign out
              </NavLink>
            </div>
            <div className="topnav-right">
              <NavLink to="/Niepcers">
                {" "}
                <i className="fas fa-user-circle" style={{ fontSize: "17px" }}>
                  Niepcers
                </i>
              </NavLink>
            </div>
          </div>
        ) : (
          <div>
            <div className="topnav-right">
              <NavLink to="/SignIn">Sign In</NavLink>
            </div>
            <div className="topnav-right">
              <NavLink to="/SignUp">Sign Up</NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
