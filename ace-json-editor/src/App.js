// src/App.js

import React, { useState } from 'react';
import AceEditorComponent from './AceEditorComponent';
import './App.css';

function App() {
  const [value, setValue] = useState('{}');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Ace Editor</h1>
        <AceEditorComponent value={value} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
