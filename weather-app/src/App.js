import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit, Quote, Description} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue} city={submitValue} setTemperature={setTemperature} setDescription={setDescription}/>
      <Info city={submitValue} temperature={temperature} setTemperature={setTemperature} />
      <Description description={description}/>
      <Forecast/>
      <Quote/>
      <Background city={submitValue}/>
      <Credit/>

    </div>
  );
}

export default App;
