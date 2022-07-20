import axios from 'axios';
import { useEffect, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import {Day} from '../../components'
const Forecast = ({weatherData}) => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    // useEffect(() => {
    //     const getForecast = async () => {
    //         const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
    //         let units = "metric";
    //         let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=${units}&appid=${apiKey}`;
    //         const response = await axios.get(apiUrl);
    //         const forecast = response.data.list;
    //        console.log(response, 'forecast')
    //     }
    //     getForecast();

        
    // }, []);

    if (weatherData.ready !== false) {
    return ( 
    <div className="forecast">
        {/* weather forecast */}
        <Day day='Mon' temp='27' icon="01d"/>
        <Day day='Tue' temp='23' icon="01d"/>
        <Day day='Wed' temp='24' icon="01d"/>
        <Day day='Thu' temp='20' icon="01d"/>
        <Day day='Fri' temp='20' icon="01d"/>
    </div> );
    } else {
        return <PulseLoader loading={true} color={"#ffffff"} cssOverride={override}/>
    }
}
 
export default Forecast;
