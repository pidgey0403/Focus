import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './style/App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrStdy, decrStdy } from './actions';
import { date, time } from './date.js';
import { scrapeSubreddit } from './reddit';

function App() {
  const study_time = useSelector(state => state.study);
  const dispatch = useDispatch();
  const dudQuotes = [
    "When you have a dream, you’ve got to grab it and never let go. - Carol Burnett",
    "There is nothing impossible to they who will try. - Alexander the Great",
    "Spread love everywhere you go. - Mother Teresa",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
    "No act of kindness, no matter how small, is ever wasted. - Aesop"
  ];

  const [active, setActive] = useState(false); // create a state for the display of the time

  // display the results of the reddit API
  let rand = Math.floor(Math.random() * 5);
  const [redditPost, setRedditPost] = useState([dudQuotes[rand]]);

  useEffect(() => {
    const interval = setInterval(() => {
      let rand = Math.floor(Math.random() * 5);
      scrapeSubreddit("home")
        .then((posts) => { setRedditPost(posts[rand].text) })
        .catch(error => { console.log(`Could not retrieve quote: ${error}`) });
    }, 300000) // 5 minutes
    return () => clearInterval(interval);
  }, [])


  //display the time component using a timeout function 
  const [timer, setCounter] = useState(time()); // a hook for the timer state
  useEffect(() => { // fires on mount
    const interval = setInterval(() => {
      setCounter(time());
    }, 1000);
    return () => clearInterval(interval); //unmount function to account for memory leaks
  }, [])

  //startTimer function
  const timerRef = React.useRef();
  const [remainingTime, setRemainingTime] = React.useState(study_time * 60);

  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    setActive(true);
    clearInterval(timerRef.current);
    setRemainingTime(study_time * 60);
    timerRef.current = setInterval(() => {
      setRemainingTime((remainingTime) => {
        if (remainingTime - 1 <= 0) { // if timer is done
          return 0;
        } else { //if timer is not done
          return remainingTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  };
  const minute = String(Math.floor(remainingTime / 60)).padStart(2, 0);
  const seconds = String(remainingTime % 60).padStart(2, 0);


  //restartTimer function
  const restartTimer = () => {
    setActive(false);
    setRemainingTime(study_time * 60);
    clearInterval(timerRef.current);
  };

  //pauseTimer function 
  const [paused, setPaused] = React.useState(false); //pause timer hook
  let saveTime = remainingTime;
  function toggleTimer() {
    setPaused(!paused);
    if (paused) { // if paused, we clear timer and save value
      startTimer();
      setRemainingTime(saveTime);
    } else { //if not paused, we can restart timer with saved value
      saveTime = remainingTime;
      clearInterval(timerRef.current);
    }
  }

  //toggleTheme function
  function toggleTheme() {
    var el = document.body;
    el.classList.toggle("dark-mode");
    let toggle = document.getElementById('swap');
    toggle.innerHTML === '\u25D1' ? toggle.innerHTML = '\u25D0' : toggle.innerHTML = '\u25D1';
  }

  return (
    <div className="App">
      <div id='Focus-page'>
        <br /><br /><br /><br /><br />
        <h1>Pomodoro Timer</h1>
        <div className='timer-widget'>
          <h3>{date()}</h3>
          <h3>{timer}</h3><br />

          <p id="timer-display">
            {
              !active
                ? study_time + ":" + seconds
                : minute + ":" + seconds
            }
          </p><br />

          <table>
            <tr>
              <th>
                <Button className="decrease" id='stdy-dcr' onClick={() => dispatch(decrStdy('study'))}>-</Button>{' '}
              </th>
              <th>
                <Button className="increase" id='stdy-incr' onClick={() => dispatch(incrStdy('study'))}>+</Button>{' '}
              </th>
            </tr>
          </table>


          <br></br>
          <div className='together'>
            <Button className='press' onClick={toggleTimer}>Pause</Button>
            <Button className='press' onClick={startTimer}>Start</Button>
            <Button className='press' onClick={restartTimer}>Restart</Button>
          </div>
        </div>

        <div class='space'></div>

        <div className='quote-widget'>
          <p id='quote'>{redditPost}</p>
        </div>

        <div className="space"></div>
        <h2 onClick={toggleTheme} id="swap" className="toggle-theme">{'\u25D1'}</h2>
        <br /><br />


      </div>
    </div>
  );
}

export default App; 
