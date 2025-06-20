import React from 'react';
import './App.css';
import Counter from './Counter';
const users = ['naama', 'noam', 'hila', 'yali']

 function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
          <h1>counter</h1>
          <Counter num = {10}/>
        </div>
}
      </header>
    </div>
  );
}

export default App;
