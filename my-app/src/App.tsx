import React from 'react';
import logo from './logo.svg';
import GreetingCard from './GreetingCard';
import './App.css';
import UserList
 from './UserList';
import CustomButton from './customButton';
import ProductCard from './productCard';

 const users = ['naama', 'noam', 'hila', 'yali']

 function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
        <ProductCard name="product A" price='100' imageUrl={"facebook.com"}/>
        </div>
}
      </header>
    </div>
  );
}

export default App;
