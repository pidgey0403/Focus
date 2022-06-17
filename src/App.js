/* Module and package imports */

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './style/App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrStdy, decrStdy } from './actions';
import { date, time } from './date'; // custom functions to display the current date and time
import { scrapeSubreddit } from './reddit';

function App() {
  /* Declare function constants */
  const study_time = useSelector(state => state.study); // get the study timer attribute from our rootReducer
  const dispatch = useDispatch(); // create dispatch alias 
  const [active, setActive] = useState(false); // create a state to toggle the clock display
  // array of quotes for initialization of the quote widget state 
  const dudQuotes = [
    "When you have a dream, you’ve got to grab it and never let go. - Carol Burnett",
    "There is nothing impossible to they who will try. - Alexander the Great",
    "Spread love everywhere you go. - Mother Teresa",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
    "No act of kindness, no matter how small, is ever wasted. - Aesop"
  ];


  /* Display results of calling Snoowrap, a Reddit API wrapper */
  let rand = Math.floor(Math.random() * 5); // generate random number within our array length
  const [redditPost, setRedditPost] = useState([dudQuotes[rand]]); // create a state to handle displaying quotes from Reddit API

  useEffect(() => { //effect hook for updating quote widget
    const interval = setInterval(() => {
      let rand = Math.floor(Math.random() * 5);
      scrapeSubreddit("home")
        .then((posts) => { setRedditPost(posts[rand].text) }) // on successful return from promise, update reddit post state with a random quote
        .catch(error => { console.log(`Could not retrieve quote: ${error}`) }); // on rejected return from promise, print error
    }, 300000) // call function after 5 minutes
    return () => clearInterval(interval); // unmount function to prevent mem. leaks
  }, [])


  /* Display the current time using a timeout function  */
  const [timer, setCounter] = useState(time()); // create a state to update the current time
  useEffect(() => { // fires on mount
    const interval = setInterval(() => {
      setCounter(time()); // call the setCounter() function to update the time()
    }, 1000); // call function after 1 seond
    return () => clearInterval(interval); // unmount function to prevent mem. leaks
  }, [])


  /* startTimer() function which manages the study timer */
  const timerRef = React.useRef();
  const [remainingTime, setRemainingTime] = React.useState(study_time * 60); // create a state and init it with the current study_time value

  const startTimer = () => {
    setActive(true); // update state that controls which timer variable to display to user
    clearInterval(timerRef.current); // clear timer reference object
    setRemainingTime(study_time * 60); // set timer state 
    timerRef.current = setInterval(() => { // set timer reference object to setInterval() 
      setRemainingTime((remainingTime) => {
        if (remainingTime - 1 <= 0) { // if timer reaches 0 
          return 0;
        } else { //if timer hasn't finished, continue decrementing the remainingTime state property
          return remainingTime - 1;
        }
      });
    }, 1000); // call function after 1 second 
    return () => clearInterval(timerRef.current); // unmount function to prevent mem. leaks
  };
  const minute = String(Math.floor(remainingTime / 60)).padStart(2, 0); // calculate the value of remaining minutes
  const seconds = String(remainingTime % 60).padStart(2, 0); // calculate the value of remaining seconds


  /* restartTimer() function which will set timer back to initial value*/
  const restartTimer = () => {
    setActive(false); // update flag that controls timer variable
    setRemainingTime(study_time * 60);
    clearInterval(timerRef.current);
  };

  /* pauseTimer() function which will pause or unpause depending on flag  */
  const [paused, setPaused] = React.useState(false); // hook/state for pausing the timer, initialized to false
  let saveTime = remainingTime; // store the current remaining time in a temporary variable
  function pauseTimer() {
    setPaused(!paused);
    if (paused) { // if paused, we clear timer and save value
      startTimer();
      setRemainingTime(saveTime);
    } else { //if not paused, we can restart timer with saved value
      saveTime = remainingTime;
      clearInterval(timerRef.current);
    }
  }

  /* toggleTheme() function which will change between light and dark mode */
  function toggleTheme() {
    var el = document.body;
    el.classList.toggle("dark-mode"); // toggle class of object with corresponding class
    let toggle = document.getElementById('swap');
    toggle.innerHTML === '\u25D1' ? toggle.innerHTML = '\u25D0' : toggle.innerHTML = '\u25D1'; // change the icon of the toggle button, depending on the state
  }

  return (
    <div className="App">
      <div id='Homepage'>
        <div id='header space' />
        <div className='space'></div>
        <h1><u>Focus</u></h1>

        {/* Timer widget that displays current date and time */}
        <div className='timer-widget'>
          <h3>{date()}</h3>
          <h3>{timer}</h3><br />

          <p id="timer-display">
            {
              !active // check if active flag is true or not
                ? study_time + ":" + seconds // display the study_time variable which shows the initial time 
                : minute + ":" + seconds // display the minute variable which shows remaining time 
            }
          </p>

          {/* Increment and decrement timer buttons */}
          <div className='together'>
            <Button className="decrease" id='stdy-dcr' onClick={() => dispatch(decrStdy('study'))}>-</Button>{' '}
            <Button className="increase" id='stdy-incr' onClick={() => dispatch(incrStdy('study'))}>+</Button>{' '}
          </div>

          {/* Control buttons for timer state */}
          <div className='together'>
            <Button className='press' onClick={pauseTimer}>Pause</Button>
            <Button className='press' onClick={startTimer}>Start</Button>
            <Button className='press' onClick={restartTimer}>Restart</Button>
          </div>
          <div className='space'></div>
        </div><br/>

        {/* Quote widget */}
        <div className='quote-widget'>
          <p id='quote'>{redditPost}</p>
        </div>
        <div className="space"></div>

        {/* Toggle theme button */}
        <div className='theme-widget'>
          <button onClick={toggleTheme} id="swap" className="toggle-theme">{'\u25D1'}</button>
        </div>
      </div>
    </div>
  );
}

export default App; 
