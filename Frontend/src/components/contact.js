import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/contactus.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  // const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  //   if (!e.target.value.trim()) {
  //     setNameError("Name is required");
  //   } else {
  //     setNameError("");
  //   }
  // };

  const handleNameBlur = (e) => {
    if (!e.target.value.trim()) {
      toast.error("Name is required");
    }
  };

  // const handleLastNameChange = (e) => {
  //   setLastName(e.target.value);
  //   if (!e.target.value.trim()) {
  //     setLastNameError("Last Name is required");
  //   } else {
  //     setLastNameError("");
  //   }
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   setEmailError("");
  // };

  // const handleEmailBlur = () => {
  //   if (!email.trim()) {
  //     setEmailError("Email is required");
  //   } else if (!/^\S+@\S+\.\S+$/.test(email)) {
  //     setEmailError("Email is invalid");
  //   }
  // };

  const handleEmailBlur = (e) => {
    if (!e.target.value.trim()) {
      toast.error("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      toast.error("Email is invalid");
    }
  };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

  const handlePhoneBlur = (e) => {
    if (!e.target.value.trim()) {
      toast.error("Phone number is required");
    }
  };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  const handleMessageBlur = (e) => {
    if (!e.target.value.trim()) {
      toast.error("Message is required");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone_no.trim() || !message.trim()) {
      toast.error("All fields are required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Email is invalid");
      return;
    }

    toast.info("Please Wait...");

    const data = { name, email, phone_no, message };
    fetch("http://localhost:8080/contactUs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        toast.success("Your message has been received by our team!");
        setTimeout(() => {
          toast.success("We will contact you shortly!");
        }, 2000);
        setTimeout(() => navigate("/"), 5000);
      })
      .catch((error) => {
        toast.error("Failed to send message.");
      });
  };

  return (
    <div>
      <section id="section-wrapper">
        <div className="box-wrapper">
          <div className="info-wrap">
            <h2 className="info-title">Contact Information</h2>
            <h3 className="info-sub-title">
              Fill up the form and our Team will get back to you within 24 hours
            </h3>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span> <a href="tel:007592420">+1800 123 550</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>Email:</span>{" "}
                <a href="mailto:mediedumatch@gmail.com">
                  mediedumatch@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <span>Website:</span>{" "}
                <a href="http://localhost:3000/">mediedumatch.com</a>
              </li>
            </ul>
            <iframe
              title="Google Maps"
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227970348214!2d81.02145507489801!3d26.800868876714024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1701586221839!5m2!1sen!2sin"
              width="350"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="form-wrap">
            <form action="#" method="POST">
              <h2 className="form-title">Send us a message </h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="Name"
                    name="name"
                    value={name}
                    // onChange={handleNameChange}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleNameBlur}
                  />
                  {/* {nameError && (
                    <span className="error">{nameError}</span>
                  )} */}
                </div>
                {/* <div className="form-group">
                  <input type="text" className="lname" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
                  {lastNameError && <span className="error">{lastNameError}</span>}
                </div> */}
                <div className="form-group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Mail"
                    name="email"
                    value={email}
                    // onChange={handleEmailChange}
                    // onBlur={handleEmailBlur}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                  />
                  {/* {emailError && <span className="error">{emailError}</span>} */}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    // inputmode="numeric"
                    className="phone"
                    placeholder="Phone"
                    name="phone_no"
                    value={phone_no}
                    // onChange={handlePhoneChange}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={handlePhoneBlur}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write your message"
                    value={message}
                    // onChange={handleMessageChange}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={handleMessageBlur}
                  ></textarea>
                </div>
              </div>

              <div className="button">
                <button className="learn-more" onClick={handleClick}>
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
