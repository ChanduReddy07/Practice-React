import React, { useState, useMemo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function WeatherComponent() {
    const [add, setAdd] = useState(0);
    const [sub, setSub]= useState(100)
    const addition=()=>{
        setAdd(add+1)
    }
    const subtract=()=>{
        setAdd(sub-1)
    }
    const multiply=()=>{
    console.log("hello")
        return add*5;
    }
    return (
            <>
            <h1>{add}</h1>
            <button onClick={addition}>Add</button>
            <button onClick={subtract}>sub</button>
            <h1>{sub}</h1>
            <br></br>
            <h1>{multiply()}</h1>
            </>
    );
}

export default WeatherComponent;
