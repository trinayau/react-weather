import './App.css';
import {Searchbar, Info, Background} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Searchbar/>
      <Info/>
      <Background/>
      </header>
    </div>
  );
}

export default App;
