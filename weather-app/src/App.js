import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Forecast} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("London");

  return (
    <div className="App">
      <header className="App-header">
      <Searchbar setSubmitValue={setSubmitValue}/>
      <Info city={submitValue}/>
      <Background city={submitValue}/>
      <Forecast/>

      </header>
    </div>
  );
}

export default App;
