import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import concert from '../assets/images/concert.png';
import pumped from '../assets/images/pumped.png';
import quiz from '../assets/images/quiz.png';
import weather from '../assets/images/weather.png';
import password from '../assets/images/password.png';
import schedule from '../assets/images/schedule.png';


export default function Portfolio () {
    return <div id="portfolio">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={concert} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Concerts Near Me</Card.Title>
            <Card.Text>
              A web application to find concerts going on near your ip address. adding text to make a third line.
            </Card.Text>
            <Button 
            href="https://jrorem.github.io/concerts-near-me/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={weather} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              An application to check the current weather and 5 day forecast for a city.
            </Card.Text>
            <Button
            href="https://jrorem.github.io/weather-dashboard/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={password} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              An application to randomly generate a secure password using parameters of your choice.
            </Card.Text>
            <Button 
            href="https://jrorem.github.io/03-javascript-challenge/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={pumped} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Get Pumped</Card.Title>
            <Card.Text>
              A web application where a user can log in, search workouts and create workout routines.
            </Card.Text>
            <Button 
            href="https://lit-atoll-87155-fc436e3971a9.herokuapp.com/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={schedule} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Event Scheduler</Card.Title>
            <Card.Text>
              A web application to create events on a calender. Color coded to denote timing of events.
            </Card.Text>
            <Button 
            href="https://jrorem.github.io/day-scheduler/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
        {/* <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src={quiz} rounded />
        </Col>
        </Row>
        </Container> */}
          <Card.Body>
            <Card.Title>Coding Quiz</Card.Title>
            <Card.Text>
              A web application quiz to test your JavaScript knowledge and save high schores
            </Card.Text>
            <Button 
            href="https://jrorem.github.io/Coding-Quiz/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
      
      </div>
}