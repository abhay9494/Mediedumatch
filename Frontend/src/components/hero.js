import Carousel from 'react-bootstrap/Carousel';
import Services from './services';
import College from './College';
import About from './about';
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom'; // Import Link

var data = [
  {
    id: 1,
    image: require('../assets/images/img3.jpg'),
    title: 'Predict Your Future Medical College',
    link:"/collegepredictor",
    description: 'Discover the perfect medical college match for you with our advanced predictor tool. Explore various factors such as location, reputation, facilities, and more to make an informed decision about your medical education journey.',
  },
  {
    id: 2,
    image: require('../assets/images/img11.jpg'),
    title: 'Plan Your Path to Medical Success',
    link:"/rankpredictor",
    description: 'Embark on your journey towards a successful medical career by starting with the right college choice. Our predictor tool assists you in charting your path to medical success, guiding you towards colleges that align with your aspirations and goals.',
  },
  {
    id: 3,
    image: require('../assets/images/img18.jpg'),
    title: 'Shape Your Medical Future',
    link :"/contact",
    description: 'Shape your future in medicine by making the right college choice. Our predictor tool empowers you to take control of your medical education, ensuring that you step into the right college environment to nurture your talents and ambitions.',
  }
]

function Home() {
  const { setUser,isLogged,setIsLogged } = useUser();
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){
      setIsLogged(true)
    }
  })

  return (
    <>    
    <section id="home" className="hero-block" style={{color:"white"}}>
      <Carousel>
        {
          data.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h2 style={{color:"white"}}>{hero.title}</h2>
                  <p style={{color:"white"}}>{hero.description}</p>
                  {/* <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a> */}
                  <Link to={hero.link} className="btn btn-primary">Learn More <i className="fas fa-chevron-right"></i></Link>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
      <Services />
      <College />
      <About />

    </>

  );
}

export default Home;