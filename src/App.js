import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style/App.css';
import logo from './logo.png';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrStdy, decrStdy, incrBrk, decrBrk, addText } from './actions';
import { date, time } from './date.js';


function App() {
  const study_time = useSelector(state => state.study);
  const break_time = useSelector(state => state.break);
  const dispatch = useDispatch();

  const [timer, setCounter] = useState(time());
  //initiating a timeout function, without our mount lifecycle method
  useEffect(() => { // fires on Mount
    const interval = setInterval(() => {
      setCounter(time());
    }, 1000);
    return () => clearInterval(interval); //unmount function to account for memory leaks
  }, [])

  ///////
  const timerRef = React.useRef();
  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  const [remainingTime, setRemainingTime] = React.useState(study_time * 60);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setRemainingTime(study_time * 60);
    timerRef.current = setInterval(() => {
      setRemainingTime((remainingTime) => {
        if (remainingTime - 1 <= 0) {
          return 0;

        } else {
          return remainingTime - 1;
        };
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  };
  const minute = String(Math.floor(remainingTime / 60)).padStart(2, 0);
  const seconds = String(remainingTime % 60).padStart(2, 0);

  const pauseTimer=() => {

  };
  const stopTimer=() =>{

  };

  return (
    <div className="App">
      <div id='Focus-page'>
        <br /><br />
        <h1>Pearl
          <img
            src={logo}
            width="30"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </h1>
        <div className='timer-widget'>
          <h3>{date()}</h3>
          <h3>{timer}</h3>
          <div className='together'>
            <div className='left'>
              <Button className="increase" id='stdy-incr' onClick={() => dispatch(incrStdy('study'))}>+</Button>{' '}
              <Button className="decrease" id='stdy-dcr' onClick={() => dispatch(decrStdy('study'))}>-</Button>{' '}
              <h3>{study_time}:00 study</h3>

            </div>
            <div className='right'>
              <Button className="increase" id='brk-incr' onClick={() => dispatch(incrBrk('break'))}>+</Button>{' '}
              <Button className="decrease" id='brk-dcr' onClick={() => dispatch(decrBrk('break'))} >-</Button>{' '}
              <h3>{break_time}:00 break</h3>
            </div>
          </div>
          <br></br>
          <div className='together'>
            <Button onClick={pauseTimer}>Pause</Button>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
          </div>


          <p>{minute}:{seconds}</p>

        </div><br /><br />

        <div className='quote-widget'>
            <p id='quote'>“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of
              ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.”</p>
            <p id='author'> -u/LoreeKButler</p>
          </div>
      </div>
    </div>
  );
}

export default App; 
