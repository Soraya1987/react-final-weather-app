import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Tabriz"/>
     <footer>
       This project was coded by Soraya Mahmoudi and is {" "}
       <a href="https://github.com/Soraya1987/react-final-weather-app" rel="noopener noreferrer" target="_blank">open-sourced on GitHub</a>
     </footer>
      </div>
     
    </div>
  );
}

