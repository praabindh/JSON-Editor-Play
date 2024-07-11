// src/App.js

import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import './App.css';

function App() {
  const [json, setJson] = useState({});

  const handleJsonChange = (updatedJson) => {
    setJson(updatedJson);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React JSON Editor</h1>
        <JsonEditor json={json} onChange={handleJsonChange} />
      </header>
    </div>
  );
}

export default App;
