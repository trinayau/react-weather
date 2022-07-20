import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit, Quote, Description} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");
  const [localTime, setLocalTime] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false, coord: {lon: '51.5085', lat: '-0.1257'}  });
  const [unit, setUnit] = useState("Metric");

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue} city={submitValue} setWeatherData={setWeatherData}/>
      <Info city={submitValue} weatherData={weatherData} setUnit={setUnit}/>
      <Description localTime={localTime} setLocalTime={setLocalTime} weatherData={weatherData}/>
      <Forecast weatherData={weatherData} unit={unit}/>
      <Quote/>
      <Background city={submitValue}/>
      <Credit/>

    </div>
  );
}

export default App;
