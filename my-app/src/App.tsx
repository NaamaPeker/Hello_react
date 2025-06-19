import React from 'react';
import logo from './logo.svg';
import GreetingCard from './GreetingCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
          <GreetingCard name = "naama" messege = "good afternoon"></GreetingCard>
        </div>
      }
      </header>
    </div>
  );
}

export default App;
