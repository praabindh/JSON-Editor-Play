// src/App.js

import React, { useState } from 'react';
import MonacoEditorComponent from './MonacoEditorComponent';
import './App.css';

function App() {
  const [value, setValue] = useState('{}');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Monaco Editor</h1>
        <MonacoEditorComponent value={value} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
