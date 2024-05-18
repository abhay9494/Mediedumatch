import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const { user } = useUser();
  console.log(user);
  // const navigate=useNavigate()
  const { setUser,isLogged,setIsLogged } = useUser();
  // const navigate=useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mediedumatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center">
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

            {/* {user && (
              <span style={{ color: "black", marginLeft: "30px" }}>
                Welcome, {user}
              </span>
            )} */}
           {
            isLogged ? <div className="btn btn-outline-danger" onClick={()=>{
              setIsLogged(false)
              localStorage.removeItem("token")
              // navigate('/')
            }} >Log Out</div>: <Nav.Link id="btn" href="/register">
            <button
              style={{
                border: "none",
                paddingRight: "10px",
                backgroundColor: "rgba(210,0,0,0.6)",
                borderRadius: "10px",
                marginLeft: "350px",
                position: "relative",
                left: " 100px",
                width: " 150px",
                height: " 40px",
              }}
            >
              Log in / Sign up
            </button>
          </Nav.Link>
           }
            {/* <Nav.Link id="register" href="/register">
              <button
                style={{
                  border: "none",
                  paddingRight: "10px",
                  backgroundColor: "rgba(210,0,0,0.6)",
                  borderRadius: "10px",
                  marginLeft: "150px",
                  width: " 100px",
                  height: " 40px",
                }}
                onClick={() => {}}
              >
                Sign up
              </button>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
