import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit, Quote, Description} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [localTime, setLocalTime] = useState(null);
  const [location, setLocation] = useState({lon: '51.5085', lat: '-0.1257'});
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue} city={submitValue} setTemperature={setTemperature} setDescription={setDescription} setIcon={setIcon} setLoaded={setLoaded} setLocalTime={setLocalTime} setLocation={setLocation} setDate={setDate}/>
      <Info city={submitValue} temperature={temperature} setTemperature={setTemperature} loaded={loaded}/>
      <Description description={description} icon={icon} localTime={localTime} location={location} setLocalTime={setLocalTime}/>
      <Forecast/>
      <Quote/>
      <Background city={submitValue}/>
      <Credit/>

    </div>
  );
}

export default App;
