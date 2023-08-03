import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import profileImage from '../assets/images/profile.e8816304971ffb02f627.jpg';

export default function About () {
    
    return <div class="about">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <div>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={profileImage} rounded />
        </Col>
        </Row>
        </Container>
        </div>
        <h1>My name is Joe Rorem and I am a junior developer. I have a background in welding and fabrication, with some commercial fishing experience.
            I am looking to change careers and be a programmer.
        </h1>
       
      {/* {function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location)} */}
    
    </div> 
}