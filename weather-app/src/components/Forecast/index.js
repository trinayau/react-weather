import axios from 'axios';
import { useEffect, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import {Day} from '../../components'
const Forecast = ({weatherData, unit}) => {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState([]);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      

    useEffect(() => {
        const getForecast = async () => {
            const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=${unit}&appid=${apiKey}`;
            const response = await axios.get(apiUrl);
            setForecastData(response.data.daily);
            setLoaded(true);
           console.log(response.data.daily, 'forecast')
        }
        getForecast();

        
    }, [weatherData, unit]);

    if (loaded === true) {
    return ( 
    <div className="forecast">
        {/* weather forecast */}
        {forecastData.map(function (day, index) {
            if (index < 5) {
                return <Day key={index} data={day} index={index}/>
            } else {
                return null;
            }
        })}
    </div> );
    } else {
        return <PulseLoader loading={true} color={"#ffffff"} cssOverride={override}/>
    }
}
 
export default Forecast;
