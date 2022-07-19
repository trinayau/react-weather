import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit, Quote} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue}/>
     
      <Info city={submitValue} temp={40}/>
      <Forecast/>
      <Quote/>
      <Background city={submitValue}/>
      <Credit/>

    </div>
  );
}

export default App;
