import { useState } from "react";
import Hello from "./Hello";
import Random from "./Random";
import Jk from "./jk";

function App() {

  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>Hello</h1>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <button onClick={()=>setCount(count+1)}>Submit {count}</button>
      <Jk />
    </div>
  );
}

export default App;
