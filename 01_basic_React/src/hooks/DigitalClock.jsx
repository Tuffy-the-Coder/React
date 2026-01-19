import "./DigitalClock.css"
import { useState, useEffect } from "react"


export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect( () => {
        // console.log("mount");
        const intervalId = setInterval(()=> {
            setTime(new Date());
        },1000)

    return () => {
        // console.log("demount");
        clearInterval(intervalId);
    }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {
        return String(num).padStart(2,"0");
    }
    return (
        <div id="clock-container">
            <div id="clock"> 
                <div id="time">{formatTime()}</div>
            </div>
        </div>
    )   
}