import React from 'react';
import logo from './logo.svg';
import GreetingCard from './GreetingCard';
import './App.css';
import UserList
 from './UserList';
import CustomButton from './customButton';

 const users = ['naama', 'noam', 'hila', 'yali']

 function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
        <CustomButton Label="button to nowhere" Color="pink"/>
        </div>
}
      </header>
    </div>
  );
}

export default App;
