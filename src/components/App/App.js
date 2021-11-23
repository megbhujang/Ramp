
import { useEffect } from 'react';
import './App.css';
import data from './data';
import React from 'react';
function App() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => {
     setTime(new Date());
    }, 1000);
  }, []);
    return (<>
    <body>
    <h2>My React Component</h2>
      {data.map((d)=> (
      <div class="row">
        {d.input===false ? ( 
          <div class="time">Date,Time: <span>{time.toLocaleString()} </span></div>
           
        ) : (Array.isArray(d.input) ? (d.input).map(element=>
          
          <div class="array">{element}</div>
          
        )
         :
          <div class="other"><p>The input value: {d.input}</p></div>
        )}
      </div>
      ))}</body></>
    );
  }

 /* return (
    <><h1>Component</h1>
    {data.map((d)=> (
      <div>
          { if(!d.data) &&
              <p>Date: {new Date().toLocaleTimeString}</p>
          
        {(() => {
          if(Array.isArray(d.data)) {
            var x;
            for(x in d.data)
              <div>{x}</div>
          }}
        )
      }
      </div>
      ))
    }
    </>
);
}*/

export default App;
