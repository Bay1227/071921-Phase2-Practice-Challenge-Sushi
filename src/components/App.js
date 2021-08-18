import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
function App() {
  const [sushis, setSushis] = useState([]);
  const [displaySushi, setDisplaySushi] = useState('')
  

  // const headers = {
    //   "Content-type": "application/json",
  //   Accept: "application/json"
  // }


  useEffect (() => {
    fetch(API)
    .then((r) => r.json())
    .then(data => setSushis(data))
  }, []);



  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
