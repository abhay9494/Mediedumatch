import React, { useState, useEffect } from 'react';
import Tour from 'reactour';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from "../context/AuthContext";
import logout from "../components/logout";
import "../css/header.css";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    // Open the tour automatically on component mount
    setIsTourOpen(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
    setIsTourOpen(false);
  };

  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : {};

  const steps = isAuthenticated ? [
    {
      selector: '.links#home',
      content: 'This is the Home page where you can find general information.',
    },
    {
      selector: '.links#collegepredictor',
      content: 'Use our College Predictor to see your college admission chances.',
    },
    {
      selector: '.links#rankpredictor',
      content: 'Check out the Rank Predictor to estimate your potential ranking.',
    },
    {
      selector: '.logout-Btn',
      content: 'Click here to log out anytime you want.',
    }
  ] : [
    {
      selector: '.login-Btn',
      content: 'Log in or sign up to get important information right in your MAIL-BOX',
    },
    {
      selector: '.links#home',
      content: 'Visit our Home page to start exploring.',
    },
    {
      selector: '.links#contact',
      content: 'Contact us for more information or assistance.',
    }
  ];

  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/">Mediedumatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between w-100"
          >
            <Nav className="mx-auto">
              <Nav.Link as={Link} id="home" className="links" style={{ marginLeft: "30px" }} to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="collegepredictor"
                className="links"
                style={{ marginLeft: "30px" }}
                to="/collegepredictor"
              >
                College Predictor
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="rankpredictor"
                className="links"
                style={{ marginLeft: "30px" }}
                to="/rankpredictor"
              >
                Rank Predictor
              </Nav.Link>
              <Nav.Link as={Link} id="team" className="links" style={{ marginLeft: "30px" }} to="/teams">
                Teams
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="contact"
                className="links"
                style={{ marginLeft: "30px" }}
                to="/contact"
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <div>
              {isAuthenticated ? (
                <div className='user-info'>
                  <span className='user-name' style={{ marginRight: "10px" }}>{decodedToken.name}</span>
                  <div 
                    className="logout-Btn"
                    onClick={handleLogout}>
                    Log Out
                  </div>
                </div>
              ) : (
                <Nav.Link as={Link} id="btn" to="/register">
                  <button
                    className="login-Btn"
                  >
                    Log in / Sign up
                  </button>
                </Nav.Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        accentColor="#ff6347"  // Customize the accent color to match your theme
      />
    </>
  );
}

export default Header;

