import { useState } from 'react';
import {Description} from '../../components'

const Info = ({city, temp}) => {

    const [temperature, setTemperature] = useState(temp);
    const [unit, setUnit] = useState("Metric");

    const showFahrenheit = (e) => {
        e.preventDefault();
        setUnit("Imperial");
        setTemperature(Math.round((temp * 9/5) + 32));
    }

    const showCelsius = (e) => {
        e.preventDefault();
        setUnit("Metric");
        setTemperature(temp);
    }

    return ( 
    <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
        <span className="temp">{temperature}</span><span className="degrees"><a href="/" onClick={showCelsius}>°C</a> | <a href="/" onClick={showFahrenheit}>°F</a></span>
        <Description/>
        </div>
    </div> );
}
 
export default Info;
