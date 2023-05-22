import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/Dashboard');
  };

    return(
    <div className="App">
      <div>
        <h1 className="title">House Rental Analysis</h1>
        <div className="group-info">
            <p>Comp90024 Group40</p>
            <p>Zhuowei Li,1335961</p>
            <p>Chenxue Hu,1327396</p>
            <p>Mingwei Liu,1320940</p>
            <p>Yumeng Zhang,1287407</p>
            <p>Chunguang Xie,1308430</p>
        </div> 
        <button className="buttonStyle" onClick={handleClick}>Start</button>
    </div>
    {/* <div className="introduction">
        <h2>Introduction</h2>
        <p>This is some introduction text...</p>
    </div> */}
    </div>
      );
}

export default Home;