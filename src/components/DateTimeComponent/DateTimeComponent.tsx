import React, { useEffect, useState } from 'react';
import { time, date } from '../../date';

const DateTimeComponent = () =>{
    /* Display the current time using a timeout function  */
    const [timer, setCounter] = useState(time()); // create a state to update the current time
    useEffect(() => { // fires on mount
        const interval = setInterval(() => {
        setCounter(time()); // call the setCounter() function to update the time()
        }, 1000); // call function after 1 seond
        return () => clearInterval(interval); // unmount function to prevent mem. leaks
    }, []);

    return(
        <div>
          <h3>{date()}</h3>
          <h3>{timer}</h3>
        </div>
    );
};

export default DateTimeComponent;