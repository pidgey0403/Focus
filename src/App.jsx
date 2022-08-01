/* Module and package imports */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import RedditComponent from "./components/RedditComponent/RedditComponent";
import DateTimeComponent from "./components/DateTimeComponent/DateTimeComponent";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import TimerComponent from "./components/TimerComponent/TimerComponent";
import TimerButtonComponent from "./components/TimerButtonComponent/TimerButtonComponent";
import PageModal from "./components/PageModal/PageModal";

function App() {
  /* Declare function constants */
  const study_time = useSelector((state) => state.study); // get the study timer attribute from our rootReducer
  const [active, setActive] = useState(false); // create a state to toggle the clock display

  /* startTimer() function which manages the study timer */
  const timerRef = React.useRef();
  const [remainingTime, setRemainingTime] = React.useState(study_time * 60); // create a state and init it with the current study_time value

  const startTimer = () => {
    setActive(true); // update state that controls which timer variable to display to user
    clearInterval(timerRef.current); // clear timer reference object
    setRemainingTime(study_time * 60); // set timer state
    timerRef.current = setInterval(() => {
      // set timer reference object to setInterval()
      setRemainingTime((remainingTime) => {
        if (remainingTime - 1 <= 0) {
          // if timer reaches 0
          return 0;
        } else {
          //if timer hasn't finished, continue decrementing the remainingTime state property
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
    if (paused) {
      // if paused, we clear timer and save value
      startTimer();
      setRemainingTime(saveTime);
    } else {
      //if not paused, we can restart timer with saved value
      saveTime = remainingTime;
      clearInterval(timerRef.current);
    }
  }

  /* toggleTheme() function which will change between light and dark mode */
  function toggleTheme() {
    var el = document.body;
    el.classList.toggle("dark-mode"); // toggle class of object with corresponding class
    let toggle = document.getElementById("swap");
    toggle.innerHTML === "\u25D1"
      ? (toggle.innerHTML = "\u25D0")
      : (toggle.innerHTML = "\u25D1"); // change the icon of the toggle button, depending on the state
  }

  return (
    <PageModal>
      {/* Timer widget that displays current date and time */}
      <DateTimeComponent />

      <TimerComponent
        active={active}
        study_time={study_time}
        seconds={seconds}
        minute={minute}
      />

      {/* Control timer buttons */}
      <ButtonComponent />

      {/* Control buttons for timer state */}
      <TimerButtonComponent
        start={startTimer}
        pause={pauseTimer}
        restart={restartTimer}
      />

      <RedditComponent />

      {/* Toggle theme button */}
      {/* <div className='theme-widget'>
        <button onClick={toggleTheme} id="swap" className="toggle-theme">{'\u25D1'}</button>
      </div> */}
    </PageModal>
  );
}

export default App;
