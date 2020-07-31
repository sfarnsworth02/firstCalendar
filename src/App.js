import React from 'react';
import './App.css';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="App">
      <header>
        <p>Calendar Title</p>
      </header>
      <body>
        <Calendar />
      </body>
    </div>
  );
}

export default App;
