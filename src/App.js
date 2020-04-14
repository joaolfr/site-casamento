import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />

      {/* <Router> */}
      {/* <Home path="/" /> */}
      {/* <Historias path="historias" /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
