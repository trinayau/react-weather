import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import WeatherIcon from '../WeatherIcon';

const Description = ({localTime, setLocalTime, date, weatherData}) => {
  const [finalDay, setFinalDay] = useState(null);

  var utc = require('dayjs/plugin/utc')
  var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
  dayjs.extend(utc)
  dayjs.extend(timezone)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

if (weatherData.ready !== false) {
  const datetime = () => {
    const targetDate = new Date() // Current date/time of user computer
    const timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60 // Convert to UNIX timestamp

    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/timezone/json?location=${weatherData.coord.lat},${weatherData.coord.lon}&timestamp=${timestamp}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data)
      if (response.data.timeZoneId != null) {
        const offsets = response.data.dstOffset * 1000 + response.data.rawOffset * 1000 // get DST and time zone offsets in milliseconds
        const localTime = new Date(timestamp * 1000 + offsets) // apply offsets to convert to local time
        const finalLocal = dayjs(localTime).format('HH:mm');

        const formatDate = (date) => {
          const d = dayjs(date).tz(response.data.timeZoneId);
          return d.format("dddd, MMMM DD YYYY");
        }
        
        setFinalDay(formatDate(date));
        setLocalTime(finalLocal)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  datetime();

    return ( <>
        <div className="description">
        <div className="descContainer">
        <p>{finalDay}</p>
        <p>{localTime} GMT+1</p>
        <p className="desc">{weatherData.description}</p>
        <WeatherIcon code={weatherData.icon} size={100}/>
      </div>
        </div>
    </> );
  } else {
    return (<BounceLoader loading={false} color={"#ffffff"} cssOverride={override}/>);
  }
}
 
export default Description;
