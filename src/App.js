import {useState} from 'react'
import './App.css';
import Cookie from './components/CookieDrag'
import TrayDrop from './components/TrayDrop'

function App() {
  return (
    <div className="App">
      <TrayDrop></TrayDrop>
    </div>
  );
}

export default App;
