import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
//load components
//import TableMap from './components/TableMap';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

import {
  MapContainer,
  TileLayer
} from 'react-leaflet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
  );
}

export default App;
