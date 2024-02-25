import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [excuse, SetExcuse] = useState("");
  const fetchAge = (parameter) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${parameter}/`).then(
      (res) => SetExcuse(res.data[0].excuse)
    );
  };

  return (
    <>
      <h1>Excuse Generator</h1>
      <h2>Pick a Category you like to generate the Excuse for:</h2>

      <button onClick={() => fetchAge("family")}>Family</button>
      <button onClick={() => fetchAge("funny")}>Funny</button>
      <button onClick={() => fetchAge("party")}>Party</button>
      <button onClick={() => fetchAge("gaming")}>Gaming</button>
      <div
        style={{
          margin: "3rem auto",
        }}
      >
        {excuse}
      </div>
    </>
  );
}

export default App;
