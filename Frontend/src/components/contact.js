import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/contactus.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value.trim()) {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (!e.target.value.trim()) {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Email is invalid');
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      setFirstNameError('First Name is required');
      return;
    }
    if (!lastName.trim()) {
      setLastNameError('Last Name is required');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Email is invalid');
      return;
    }

    const data = { firstName, lastName, email, phone, message };
    console.log(data);
    fetch('http://localhost:8080/message/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setTimeout(() => navigate('/'), 5000);
  };

  return (
    <div>
      <section id="section-wrapper">
        <div className="box-wrapper">
          <div className="info-wrap">
            <h2 className="info-title">Contact Information</h2>
            <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span> <a href="tel:007592420">+1800 123 550</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>Email:</span> <a href="mailto:contact@gmail.com">contact@mem.com</a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <span>Website:</span> <a href="http://localhost:3000/">mediedumatch.com</a>
              </li>
            </ul>
            <iframe title="Google Maps" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227970348214!2d81.02145507489801!3d26.800868876714024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1701586221839!5m2!1sen!2sin" width="350" height="150" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
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
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange} />
                  {firstNameError && <span className="error">{firstNameError}</span>}
                </div>
                <div className="form-group">
                  <input type="text" className="lname" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
                  {lastNameError && <span className="error">{lastNameError}</span>}
                </div>
                <div className="form-group">
                  <input type="email" className="email" placeholder="Mail" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                <div className="form-group">
                  <input type="number" className="phone" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="form-group">
                  <textarea name="message" id="" placeholder="Write your message" value={message} onChange={handleMessageChange}></textarea>
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

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Response submitted successfully!</h2>
            <p>Redirecting you to home page!!!</p>
          </div>
        </div>
      )}


    </div>
  );
}

export default Contact;