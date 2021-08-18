// we can use sushi.slice(0, 4) for displaying 4 sushi at time 
// setEaten is for removing the sushi from plate 
// also we can do eaten ? '' instead of null
// <Table plates ={sushis.filter(sushi => sushi.eaten)  } /> bring a table to empty plates after we eat the sushi
// !peice.eaten is helping if we click the already eaten sushi money remainig same if we don't do that if we click twice money will take 2 times

import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [beltPosition, setBeltPosition] = useState(0);
  const [money, setMoney] = useState(100);
  const DISPLAY_COUNT = 4;
 
  useEffect (() => {
    fetch(API)
    .then((r) => r.json())
    .then(data => setSushis(data))
  }, []);

  function setEaten(piece) {
    const remainingMoney = money - piece.price;

    if (!piece.eaten && remainingMoney >= 0){
      setMoney(remainingMoney);
    
   
    setSushis(  
      sushis.map((sushi) => 
      sushi.id === piece.id ? {...sushi, eaten : true} : sushi)
    );
  }}

  function advanceBelt() {
    setBeltPosition((beltPosition + DISPLAY_COUNT) % sushis.length);
  }



  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis.slice(beltPosition, beltPosition + DISPLAY_COUNT)}
      handleMoreClick={advanceBelt}
      handleEatSushi={setEaten}

       />
      <Table money={money} plates ={sushis.filter(sushi => sushi.eaten)   } />
    </div>
  );
}

export default App;
