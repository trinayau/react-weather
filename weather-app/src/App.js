import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit, Quote, Description} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue} city={submitValue} setTemperature={setTemperature} setDescription={setDescription} setIcon={setIcon} setLoaded={setLoaded}/>
      <Info city={submitValue} temperature={temperature} setTemperature={setTemperature} loaded={loaded}/>
      <Description description={description} icon={icon}/>
      <Forecast/>
      <Quote/>
      <Background city={submitValue}/>
      <Credit/>

    </div>
  );
}

export default App;
