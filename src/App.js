import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
//load components
//import TableMap from './components/TableMap';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
//import Chartpage from './components/Chartpage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/Dashboard">Dashboard</Link> | 
        {/* <Link to="/chart_page">Chart Page</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/chart_page" element={<Chartpage />} /> */}
      </Routes>
    </Router>
      
  );
}

export default App;
