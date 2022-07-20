import { useState } from "react";
import WeatherIcon from "../WeatherIcon";

const Day = ({day, min, max, icon}) => {
    
    return ( 
        <div className="day-forecast" style={{ display:"flex", flexDirection:"column", height: "auto" }}>
    <p style={{ fontWeight:"600"}}>{day}</p>
    <WeatherIcon code={icon} size={150}/>
    <p>{min} | {max} </p>
    </div> );
}
 
export default Day;
