import logo from './logo.svg';
import './App.css';
import './global.css'
import GherkinTable from './components/GherkinTable';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <div className="main">
            <GherkinTable />
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
