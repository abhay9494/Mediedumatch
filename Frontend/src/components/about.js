import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/img1.jpg";

function About() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1 style={{ color: "#f64b4b" }}>About Us</h1>
          <div className="subtitle" style={{ color: "rgba(210, 0, 0, 0.6)" }}>
            learn more about us
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <br />
            <br />
            <h4>
              {" "}
              MediEduMatch is not only your ordinary "MEDICAL COLLEGE
              PREDICTOR". It's your passion to a brighter medical career,
              tailored just for you. Say goodbye to the uncertainty of medical
              college admissions and hello to a future you've always dreamt of.
            </h4>
            <br />
            <h4>
              We reduce the effort of manually researching colleges. We give
              100% accurate information from official sources. We help students
              make informed decisions about their college options.
            </h4>
            <h4>
              We are here to help you navigate the college admissions process
              with ease and confidence.
            </h4>
            <h3>
              Your success is our happiness.
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
