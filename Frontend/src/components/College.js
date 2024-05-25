import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.aiims.edu/index.php?lang=en',
    image: require('../assets/images/img2.jpg'),
    title: 'AIIMS Delhi',
  },
  {
    id: 2,
    link: 'https://www.aiimsjodhpur.edu.in/',
    image: require('../assets/images/img3.jpg'),
    title: 'AIIMS Jodhpur',
  },
  {
    id: 3,
    link: 'https://www.aiimsraipur.edu.in/',
    image: require('../assets/images/img4.jpg'),
    title: 'AIIMS Raipur',
  },
  {
    id: 4,
    link: 'https://www.aiimsjammu.edu.in/',
    image: require('../assets/images/img5.jpg'),
    title: 'AIIMS Jammu',
  },
  {
    id: 5,
    link: 'https://www.bhu.ac.in/site/UnitHomeTemplate/1_4_1101_Institute-of-Medical-Sciences-Home',
    image: require('../assets/images/img6.jpg'),
    title: 'BHU',
  },
  {
    id: 6,
    link: 'https://www.aiimsbhopal.edu.in/',
    image: require('../assets/images/img7.jpg'),
    title: 'AIIMS Bhopal',
  },
  {
    id: 7,
    link: 'https://www.aiimsjodhpur.edu.in/',
    image: require('../assets/images/img8.jpg'),
    title: 'AIIMS Jodhpur',
  },
  {
    id: 8,
    link: 'https://aiimspatna.edu.in/',
    image: require('../assets/images/img9.jpg'),
    title: 'AIIMS Patna',
  },
  {
    id: 9,
    link: 'https://www.aiimsraipur.edu.in/',
    image: require('../assets/images/img16.jpg'),
    title: 'AIIMS Raipur',
  }
]



function College() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{color: "#f64b4b"}}>Top Colleges</h2>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} style={{ width: "100%", aspectRatio: "3/2", objectFit: 'cover', }} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      
      </Container>
    </section>
    
  );
}

export default College;