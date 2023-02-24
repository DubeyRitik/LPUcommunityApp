import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Images/car1.png';
import img1 from '../Images/car2.png';
import img2 from '../Images/car3.png';

import Image from 'react-bootstrap/Image'

function Carousels() {
  return (
    <Carousel style={{width:'100%'}}>
      <Carousel.Item>
        <Image
          style={{width:'10rem',height:'25rem'}}
          src={img}
          className="d-block w-100"
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Code-a-thon by Programming Pathsahala</h3>
          <p>Enroll by 24th feb</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{width:'30rem',height:'25rem'}}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Campus Ambassdor Program</h3>
          <p>Amazon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{width:'30rem',height:'25rem'}}
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CodeChef Contest</h3>
          <p>
           Register by 1st March
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
