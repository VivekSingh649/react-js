import './App.css'
import React from 'react'
import { useState } from 'react';

export default function Counter(){
    let [value, setValue] = useState(1);

    const addValue = ()=>{
        // setValue(value +1);
        setValue( ++value);
        // setValue((preValue) => preValue +1);
    }
    const removeValue = ()=>{
      if(value > 1){
        // setValue(value - 1);
        setValue(--value)
      }
    }
    return(
        <>
        <div className="counter-wrapper">
            <button className="count" onClick={removeValue}>-</button>
            <input type="number" name="number" value={value} readOnly />
            <button className="count" onClick={addValue}>+</button>
        </div>
        </>
    )
}