
import React, { useState, useEffect, useRef } from 'react';
import "./Stopwatch.css"

export default function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning]); 

    function timeStart() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef);
    }
    function timeStop() {
        setIsRunning(false);
        console.log(elapsedTime)

    }
    function timeReset() {
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // console.log(hours, minutes, seconds, milliseconds);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`

    }

    return (
        <div id="container">
            <div id="time">{formatTime()}</div>
            <button onClick={timeStart} className="button">Start</button>
            <button onClick={timeStop} className="button">Stop</button>
            <button onClick={timeReset} className="button">Reset</button>
        </div>
    )
}



// we created 2 state isRunning & elapsedTime
// we created 2 ref intervalRef & startTimeRef

// isRunning is used to track if stopwatch is running or not when ever its value is toggled through start, stop and reset button useEffect will run.

// elapsedTime is used to store the amount of time that has passed initially it will be zero but when isRunning is true through setInterval its value will be changed every 10ms by using Date.now - startTimeRef

// intervalRef is used to store the setInterval function and to later clear it

// startTimeRef is used to store Date.now value when stopwatch starts so it can later be used to compare to get time diff.

// date.now() gives milliseconds passed since the epoch
// str.padStart: current string with another string (multiple times, if needed) until the resulting string reaches the specified length
// str.padStart(targetLength [, padString])


// useEffect: is used to track isRunning toggle whenever its value changes it checks if isRunning is true it will use intervalRef.current for setInterval to update elapsedTime using
// (Date.now() - startTimeRef.current) every 10ms and use return to clear the previous interval

// function timeStart(): it set isRunning to true which cause useEffect to run and gives startTimeRef to store the time when stopwatch started

// function timeStop(): it set isRunning to false which cause useEffect to run and clear the interval to stop updating elapsedTime

// function timeReset(): it set elapsedTime to 0 & set isRunning to false

// function formatTime(): it us used to convert ms into hours, minutes, seconds, miliseconds by using specific formula 
// it use String() to conver time(number) into string and use .padStart to reach length 2 with basic text 0. 

