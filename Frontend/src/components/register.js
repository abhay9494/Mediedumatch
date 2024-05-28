import React, { useEffect, useState } from "react";
import Image from "../assets/images/surgical-item-500x500.webp";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Logo from "../assets/images/logo.png";
// import GoogleSvg from "../assets/images/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../css/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { NavLink, useNavigate } from "react-router-dom";

const Register = ({ setislogged }) => {
  // const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  // const [isOtpSent, setIsOtpSent] = useState(false);
  // const [otp, setOtp] = useState('');
  // const [email, setEmail] = useState(''); // State to hold email

  const [check, setCheck] = useState(false);
  let navigate = useNavigate();
  const [showpass, setshowpass] = useState(false);
  const [showcomfirmpass, setshowcomfirmpass] = useState(false);
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [isLoading, setIsLoading] = useState(false);

  async function sendOtp(event) {
    event.preventDefault();
    if (isLoading) {
      toast.error("Please wait !!!");
      return;
    }
    setIsLoading(true);
    formData.name = formData.firstname + " " + formData.lastname;
    // console.log("hhhhhhh");
    await axios
      .post("http://localhost:8080/register", formData)
      .then((res) => {
        toast.success("OTP sent successfully !!!");
        setCheck(true);
      })
      .catch((e) => {
        toast.error("Something went wrong while sending otp");
        // console.log(e);
      });

    setIsLoading(false);
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log(formData);
    try {
      const response = await axios.put(
        `http://localhost:8080/verify-account?email=${formData.email}&otp=${formData.otp}`,
        formData
      );
      // console.log(formData);
      if (response.status === 200) {
        // console.log(response);
        navigate("/login");
        toast.success("Account created successfully!!!");
      } else {
        throw new Error("Failed to verify account");
      }
    } catch (e) {
      // console.log(e);
      toast.error("Something went wrong, please try again later");
    }
  }

  async function resendOtp() {
    try {
      toast.info("Trying to resend OTP on your mail. Please Wait!")
      const response = await axios.put(`http://localhost:8080/regenerate-otp?email=${formData.email}`);
      if (response.status === 200) {
        toast.success("OTP resent successfully!");
      } else {
        throw new Error("Failed to resend OTP");
      }
    } catch (error) {
      toast.error("Failed to resend OTP: " + error.message);
    }
  }

  // const [accountType,setaccountType]=useState('student')

  // const handleRegisterSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!isOtpSent) {
  //     let name = e.target.name.value;
  //     let password = e.target.password.value;
  //     let confirmPassword = e.target.confirmPassword.value;

  //     setEmail(e.target.email.value); // Set email state

  //     if (password.length > 0 && confirmPassword.length > 0) {
  //       if (password === confirmPassword) {
  //         try {
  //           const formData = { email, password };
  //           const response = await axios.post(
  //             "http://localhost:8080/student/register",
  //             formData
  //           );
  //           toast.success("Email sent for verification!");
  //           setIsOtpSent(true); // Change state to show OTP input and change button
  //         } catch (err) {
  //           toast.error(err.message);
  //         }
  //       } else {
  //         toast.error("Passwords don't match");
  //       }
  //     } else {
  //       toast.error("Please fill all inputs");
  //     }
  //   } else {
  //     // Verify OTP
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8080/student/verify-account",
  //         { email, otp }
  //       );
  //       if (response.data.success) {
  //         toast.success("OTP verified successfully! Registration complete.");
  //         navigate("/login"); // Navigate to the login page after successful registration
  //       } else {
  //         toast.error("Invalid OTP, please try again.");
  //       }
  //     } catch (err) {
  //       toast.error(
  //         err.response
  //              ? err.response.data.message
  //           : "An error occurred while verifying OTP."
  //       );
  //     }
  //   }
  // };

  // const handleResendOtp = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/student/regenerate-otp",
  //       { email }
  //     );
  //     toast.success("OTP resent successfully!");
  //   } catch (err) {
  //     toast.error(err.response.data.message);
  //   }
  // };

  // useEffect(() => {
  //   if (token !== "") {
  //     toast.success("You already logged in");
  //     navigate("/dashboard");
  //   }
  // }, [token, navigate]);

  return (
    <div className="register-main bg-secondary">
      <div className="register-left">
        <img src={Image} alt="" className="full-cover" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">{/* <img src={Logo} alt="" /> */}</div>
          <div className="register-center">
            <h2>Welcome to MediEduMatch!</h2>
            <p>Please enter your details</p>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="firstname"
                required
                id="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstname}
                //       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
                // w-full p-[12px]"
              />
              <input
                type="text"
                name="lastname"
                required
                id="lastname"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastname}
                //       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
                // w-full p-[12px]"
              />
              <input
                type="email"
                name="email"
                required
                id="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                //       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
                // w-full p-[12px]"
              />
              <div className="pass-input-div">
                <input
                  type={showpass == true ? "text" : "password"}
                  name="password"
                  required
                  id="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                  //       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
                  // w-full p-[12px]"
                />
                {/* {showpass ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showpass);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )} */}
                <span
                  onClick={() => {
                    setshowpass((prev) => !prev);
                  }}
                  className="absolute right-3 mt-2 top-[30px] cursor-pointer "
                >
                  {showpass === true ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>

              <div className="pass-input-div">
                <input
                  type={showcomfirmpass == true ? "text" : "password"}
                  name="confirmPassword"
                  required
                  id="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  //       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
                  // w-full p-[12px]"
                />
                {/* {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )} */}
                <span
                  onClick={() => {
                    setshowcomfirmpass((prevc) => !prevc);
                  }}
                  className="absolute right-3 mt-2 ml top-[30px] cursor-pointer "
                >
                  {showcomfirmpass === true ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
              {/* {isOtpSent ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required={true}
                  />
                  <button type="submit">Verify OTP and Register</button>
                  <button type="button" onClick={handleResendOtp}>
                    Resend OTP
                  </button>
                </>
              ) : (
                <div className="register-center-buttons">
                  <button type="submit">Sign Up</button>
                </div>
              )} */}
              {check ? (
                <div>
                  <label className="w-full otp-label">
                    <input
                      type="text"
                      name="otp"
                      required
                      id="otp-input"
                      onChange={changeHandler}
                      placeholder="Enter OTP"
                      className="bg-richblack-800 rounded-[0.5rem] text-richblack-5w-full p-[12px] otp-input"
                    />
                    <button
                      className="btn btn-secondary"
                      id="resend-otp-btn"
                      onClick={resendOtp}
                      style={{ marginLeft: '10px' }}
                    >
                      Resend OTP
                    </button>
                  </label>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => submitHandler(e)}
                  >
                    SignUp
                  </button>
                </div>
              ) : (
                <div>
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={(e) => sendOtp(e)}
                  >
                    {isLoading ? "Please Wait" : "Send OTP"}
                  </button>
                </div>
              )}
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
