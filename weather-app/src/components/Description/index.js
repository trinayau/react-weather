import dayjs from 'dayjs';
import { useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

const Description = ({description, icon, loaded, localTime, location, setLocalTime, date}) => {
  var utc = require('dayjs/plugin/utc')
  var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
  dayjs.extend(utc)
  dayjs.extend(timezone)

  const [finalDay, setFinalDay] = useState(null);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const iconMatching = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };


  const datetime = () => {
    const targetDate = new Date() // Current date/time of user computer
  const timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60 // Convert to UNIX timestamp
    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/timezone/json?location=${location.lat},${location.lon}&timestamp=${timestamp}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
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

  if(loaded !== false){
    return ( <>
        <div className="description">
        <div className="descContainer">
        <p>{finalDay}</p>
        <p>{localTime} GMT+1</p>
        <p className="desc">{description}</p>
        <ReactAnimatedWeather className="icon" icon={iconMatching[icon]} color="#ffffff" size={100} />
      </div>
        </div>
    </> );
  } else {
    return (<BounceLoader loading={false} color={"#ffffff"} cssOverride={override}/>);
  }
}
 
export default Description;
