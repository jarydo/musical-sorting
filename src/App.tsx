import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import quickSort from './logic/quickSort';
import { Button } from './components';

function App() {
  const [sampleArray, setSampleArray] = useState([10,40,20,30,50]);

  const sorting = () => {
    const newSampleArray = [...sampleArray];
    quickSort(newSampleArray, 0, newSampleArray.length - 1);
    setSampleArray(newSampleArray);
  }

  return (
    <div className="App">
      <Button onClick={() => sorting()}>Sort!</Button>
      <div className="flex gap-2">
        {sampleArray.map((value) => {
          return <div style={{ height: `${value}px`, width: '10px', backgroundColor:'blue' }} />
        })}
      </div>
      
    </div>
  );
}

export default App;
