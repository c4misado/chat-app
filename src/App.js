import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact image={"https://randomuser.me/api/portraits/men/31.jpg"} firstName="Alexander" lastName="Hill" onlineStatus="online"/>
    </div>
  );
}

export default App;