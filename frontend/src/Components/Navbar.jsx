import React, { useEffect } from "react";
import bus from "../assets/bus.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../Reducer/Authslice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setLoggedOut());
    localStorage.removeItem("isLoggedIn");
    navigate("/Login");
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={bus} alt="bus" />
      </div>
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <i>
              <Link className="login" to={"/booking"}>
                Booking
              </Link>
            </i>
            <i>
              <button className="signup" onClick={handleLogout}>
                Logout
              </button>
            </i>
          </>
        ) : (
          <>
            <i>
              <Link className="login" to={"/Login"}>
                Login
              </Link>
            </i>
            <i>
              <Link className="signup" to={"/register"}>
                Sign up
              </Link>
            </i>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
