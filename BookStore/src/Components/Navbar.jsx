import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Navbar() {
  const { cart } = useSelector((state) => state.cartReducer);
  const authloc = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.error("User Logged Out!!!");
    await auth.signOut();
    localStorage.removeItem("user");
    navigate("/signup");
  };

  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-text"> BookStore</span>
        </div>
        <div className="nav-link-container">
          {authloc ? (
            <div className="nav-link">
              <li>
                <Link to="/" className="nav-link-tag">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/add" className="nav-link-tag">
                  Add Book
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link-tag">
                  <FaShoppingCart />
                  <span>{cart.length}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="nav-btn nav-btn-link"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
              <span className="user-logo">
                {JSON.parse(authloc).email.toUpperCase().charAt(0)}
              </span>
            </div>
          ) : (
            <div className="sign-btn-container">
              <Link to="/signup" className="nav-btn nav-btn-link-1">
                SignUp
              </Link>
              <Link to="/login" className="nav-btn nav-btn-link-2">
                LogIn
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
