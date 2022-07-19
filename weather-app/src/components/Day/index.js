import { useState } from "react";

const Day = ({day, temp}) => {

    const [temperature, setTemperature] = useState(temp);

    const showFahrenheit = (e) => {
        e.preventDefault();
        setTemperature(Math.round((temp * 9/5) + 32));
    }

    const showCelsius = (e) => {
        e.preventDefault();
        setTemperature(temp);
    }
    

    return ( 
        <div className="day-forecast" style={{ display:"flex", flexDirection:"column", height: "auto" }}>
    <p style={{ fontWeight:"600"}}>{day}</p>
    <p>{temperature}<a href="/" onClick={showCelsius}>°C</a> | <a href="/" onClick={showFahrenheit}>°F</a></p>
    </div> );
}
 
export default Day;
