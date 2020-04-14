import React from 'react'
import { Router } from '@reach/router'

import './App.css';
import Navbar from './components/navbar'
import Home from './pages/home'
import Historias from './pages/historias'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Router>
        <Home path="/" />
        <Historias path="historias" />
      </Router>
    </div>
  );
}

export default App;
