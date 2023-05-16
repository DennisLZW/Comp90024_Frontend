import React from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/Dashboard');
  };

    return(
    <div className="App">
      <h1 style={{fontSize: '50px'}}>House Rental</h1>
      <div style={{fontSize: '20px'}}>
            <p>Comp90024 Group39</p>
            <p>Zhuowei Li,1335961</p>
            <p>teammate1</p>
            <p>teammate2</p>
            <p>teammate3</p>
            <p>teammate4</p>
        </div> 
      <button onClick={handleClick}>Start</button>
    </div>
      );
}

export default Home;