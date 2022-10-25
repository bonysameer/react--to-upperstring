import * as React from 'react';
import './style.css';
import {useState} from 'react';

function App() {

  const [value, setValue] = useState("");

  const stringchange =(event) =>{
    setValue(value.toUpperCase());
  }

  const change =(e)=>{
    setValue(e.target.value);
  }

  return (
    <div>
      <div className="main">
        <input type={"text"} onChange={change} />
        <button onClick={stringchange} >Click me</button>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default App;

