import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      const details = JSON.parse(localStorage.getItem("signin"));

      if (!details) {
        navigate("/signup");
        toast.error("Register Yourself!!!");
      } else if (email === details.email && password === details.password) {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        navigate("/");
        toast.success("Succefully Logged In!!!");
      } else {
        toast.error("Please Enter Correct Details!!");
      }
    } else {
      toast.error("Enter All the field!!");
    }
    setEmail("")
    setPassword("")
  };

  return (
    <div className="signup-banner">
      <div className="form-box">
        <div className="form">
          <form className="register-form" onSubmit={handleLogin}>
            <h2 style={{ color: "white", marginBottom: "18px" }}>
              {" "}
              USER LOGIN
            </h2>
            <input
              type="text"
              placeholder="Enter Email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>LOG IN</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
