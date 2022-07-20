import { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';

const Info = ({city, weatherData}) => {

    const [unit, setUnit] = useState("Metric");
    const [cityTemp, setCityTemp] = useState(weatherData.temperature)

    useEffect(() => {
        setCityTemp(weatherData.temperature)
        
    }, [weatherData]);

    const showFahrenheit = (e) => {
        e.preventDefault();
        setUnit("Imperial");
        setCityTemp(Math.round((weatherData.temperature * 9/5) + 32));
    }

    const showCelsius = (e) => {
        e.preventDefault();
        setUnit("Metric");
        setCityTemp(weatherData.temperature);
    }

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      if (weatherData.ready !== false) {
    return ( 
    <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
        <span className="temp">{cityTemp}</span>
        <span className="degrees"><a href="/" onClick={showCelsius}>°C</a> | 
        <a href="/" onClick={showFahrenheit}>°F</a></span>
        
        </div>
    </div> );
      } else {
        return <BounceLoader loading={true} color={"#ffffff"} cssOverride={override}/>
      }
}
 
export default Info;
