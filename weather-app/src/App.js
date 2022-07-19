import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast, Credit} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue}/>
      <Info city={submitValue}/>
      <Background city={submitValue}/>
      <Forecast/>
      <Credit/>

    </div>
  );
}

export default App;
