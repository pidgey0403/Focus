import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import logo from './logo.png';
import './style/App.css';


function App() {
  return (
    <div className="App">
      <div id='Focus-page'>
        <Navbar bg="light" fixed='top'>
          <Nav className='container-fluid'>
            <Navbar.Brand>
              <h1>Pearl
                <img
                  src={logo}
                  width="30"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                />
              </h1>
            </Navbar.Brand>
            <Navbar.Text>
              Productivity made simple
            </Navbar.Text>
            <Nav className="ms-auto">
              <Nav.Link href="#Focus-page">Focus</Nav.Link>
              <Nav.Link href="#About-page">Learn More</Nav.Link>
            </Nav>
          </Nav>
        </Navbar>

        <br /><br />
        <div className='timer-widget'>
          <h3>Tuesday June 7th, 2022</h3>
          <h3>02:23:45 PM</h3>
          <div className='together'>
            <div className='left'>
              <Button className="increase" id='stdy-incr'>+</Button>{' '}
              <Button className="decrease" id='stdy-dcr'>-</Button>{' '}
              <h3>25:00 study</h3>
            </div>
            <div className='right'>
              <Button className="increase" id='brk-incr'>+</Button>{' '}
              <Button className="decrease" id='brk-dcr'>-</Button>{' '}
              <h3>5:00 break</h3>
            </div>
          </div>
          <Button className='start'>Start</Button>
        </div><br /><br />

        <div className='together'>
          <div className='quote-widget'>         
            <p id='quote'>“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of
              ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.”</p>
            <p id='author'> -u/LoreeKButler</p>
          </div>

          <div className='task-widget'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Focus your task-list</h5></Form.Label>
                <Form.Control type="email" placeholder="i.e. review weekly lectures" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

        </div>


      </div>


      <div id='About-page'>
        <h3>About Pearl</h3>
        <p>Pearl is designed to be an easy to use app, focusing on providing simplicity and organization to student's messy lives. </p>
        <p>Using the Pomodoro Technique, Pearl allows users to set study durations, and include a simple checklist of tasks to complete as they progress.</p>
      
      
      
      
      
      </div>



    </div>
  );
}

export default App; 
