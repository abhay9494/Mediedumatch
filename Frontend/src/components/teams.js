import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/author1.jpg'),
    fbLink: 'https://www.facebook.com/abhayPR9494',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Abhay Prasad',
    designation: 'Team Lead',
    description: ''
  },
  {
    id: 2,
    image: require('../assets/images/author1.jpg'),
    fbLink: 'https://www.facebook.com/search/top/?q=Pranjal%20Sharma',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Pranjal Sharma',
    designation: 'Team Member',
    description: ''
  },
  {
    id: 3,
    image: require('../assets/images/author1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Shaurya Tripathi',
    designation: 'Team Member',
    description: ''
  },
  {
    id: 4,
    image: require('../assets/images/author1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gana Kalvakuntla',
    designation: 'Team Member',
    description: ''
  },
 
]

function AppTeams() {
  return (
<section id="teams" className="block teams-block" style={{ marginTop: '30px', color:'white' }}>
      <Container fluid>
        <div className="title-holder">
      
        <div className="subtitle" style={{ color: 'white', fontFamily: 'Times New Roman',  fontSize : '40px'}}>Team Members</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <div className="title-holder">We wish for your better future</div>
      </Container>
    </section>
  );
}

export default AppTeams;