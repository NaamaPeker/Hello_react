import React from 'react';
import logo from './logo.svg';
import GreetingCard from './GreetingCard';
import './App.css';
import UserList
 from './UserList';

 const users = ['naama', 'noam', 'hila', 'yali']

 function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
          <GreetingCard name = "naama" messege = "good afternoon"></GreetingCard>
        
        <h1>All users</h1>
        <UserList users = {users}/>
        </div>
}
      </header>
    </div>
  );
}

export default App;
