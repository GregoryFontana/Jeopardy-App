import logo from './logo.svg';
import React from 'react'
import './App.css';
import GetQuestion from './components/GetQuestion';

function App() {



  return (
    <div className="App">
     <h1 className='App-header'>Jeopardy Now and Forever</h1>
     <GetQuestion/>
    </div>
  );
}

export default App;
