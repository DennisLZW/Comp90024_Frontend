import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import Introduction from './components/Introduction';


//load components
//import TableMap from './components/TableMap';



function App() {
  return (
    
      <div className="App" >
      <h1 style={{fontSize: '50px'}}>House Rental</h1>
      <Introduction/>
      </div>
    
  );
}

export default App;
