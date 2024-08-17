import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { setLoggedIn, setLoggedOut } from "./Reducer/Authslice";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/Home" /> : <Login />}
          />
          <Route
            path="/Home"
            element={isLoggedIn ? <Home /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Login"
            element={isLoggedIn ? <Navigate to="/Home" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
