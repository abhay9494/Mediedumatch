import React, { useState } from "react";
import Image from "../assets/images/loginImage.jpg";
import "../css/loginNew.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserProvider, useUser } from "../context/UserContext";
import axios from "axios";
import UserContext from "../context/UserContext";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from '../context/AuthContext'; // Adjust the path as necessary

const Login = () => {
  const navigate = useNavigate();
  const { setUser, isLogged, setIsLogged } = useUser();
  // const{isLogged,setIsLogged}=useContext(UserContext)
  // console.log('kjjhukh',isLogged);

  // const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.info("Please Wait...");
    // const response = await fetch("http://localhost:8080/login");
    // const students = await response.json()

    // Check if the entered email exists in the fetched students and get the student data
    // const student = students.find(student => student.email === email);

    //   if (student && student.password === password) {
    //     setUser(student.name); // Store the user's name in the context
    //     // console.log(student.name);
    //     toast.success("Login successful");
    //     setTimeout(() => navigate('/'), 3000);
    //   } else {
    //     toast.error("Incorrect email or password");
    //   }
    // } catch (error) {
    //   console.error("Error fetching students:", error);
    //   // toast.error("An error occurred during login");
    //   toast.error("User not found!!! Kindly SignUp.");
    // }

    await axios
      .post("http://localhost:8080/login", { email, password })
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.token);
        login(res.data.token); // Save token and update auth state

        const decodedToken = jwtDecode(res.data.token);
        // console.log(decodedToken);
        
        setIsLogged(true);
        navigate("/");
        toast.success("Welcome " + decodedToken.name + " !");
      })
      .catch((e) => {
        // console.log(e);
        toast.error("Incorrect email or password");
      });
    // console.log(email, password)
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">{/* <img src={Logo} alt="" /> */}</div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="login-center-options">
                <div className="remember-div">
                  {/* <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember me</label> */}
                </div>
                {/* <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a> */}
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
