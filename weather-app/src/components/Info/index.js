import { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';

const Info = ({city, temperature}) => {

    const [unit, setUnit] = useState("Metric");
    const [cityTemp, setCityTemp] = useState(temperature)

    useEffect(() => {
        setCityTemp(temperature)
        
    }, [temperature]);

    const showFahrenheit = (e) => {
        e.preventDefault();
        setUnit("Imperial");
        setCityTemp(Math.round((temperature * 9/5) + 32));
    }

    const showCelsius = (e) => {
        e.preventDefault();
        setUnit("Metric");
        setCityTemp(temperature);
    }

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    return ( 
    <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
        <span className="temp">{cityTemp ? cityTemp : <BounceLoader loading={false} color={"#ffffff"} cssOverride={override}/>}</span>
        <span className="degrees"><a href="/" onClick={showCelsius}>°C</a> | 
        <a href="/" onClick={showFahrenheit}>°F</a></span>
        
        </div>
    </div> );
}
 
export default Info;
