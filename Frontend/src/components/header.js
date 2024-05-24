import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from "../context/AuthContext"; // Ensure this path is correct
import logout from "../components/logout"; // Ensure this path is correct

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
  };

  const token = localStorage.getItem("token"); // Ensure you get the token from localStorage
  const decodedToken = token ? jwtDecode(token) : {};

  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Mediedumatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-between w-100"
        >
          <Nav className="mx-auto">
            <Nav.Link id="home" style={{ marginLeft: "30px" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              id="collegepredictor"
              style={{ marginLeft: "30px" }}
              href="/collegepredictor"
            >
              College Predictor
            </Nav.Link>
            <Nav.Link
              id="rankpredictor"
              style={{ marginLeft: "30px" }}
              href="/rankpredictor"
            >
              Rank Predictor
            </Nav.Link>
            <Nav.Link id="team" style={{ marginLeft: "30px" }} href="/teams">
              Teams
            </Nav.Link>
            <Nav.Link
              id="contact"
              style={{ marginLeft: "30px" }}
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
          <div>
            {isAuthenticated ? (
              <div>
                <span style={{ marginRight: "10px" }}>{decodedToken.name}</span>
                <div className="btn btn-outline-danger" onClick={handleLogout}>
                  Log Out
                </div>
              </div>
            ) : (
              <Nav.Link id="btn" href="/register">
                <button
                  style={{
                    border: "none",
                    backgroundColor: "rgba(210,0,0,0.6)",
                    borderRadius: "10px",
                    width: "150px",
                    height: "40px",
                  }}
                >
                  Log in / Sign up
                </button>
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
