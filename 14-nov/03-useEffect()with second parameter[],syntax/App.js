import {useEffect, useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const[state, setState]=useState(0)
    const[state1, setState1]=useState(100)
    useEffect(()=>{
        console.log("Mounted")
    },[state])
    const add=()=>{
        setState(state+1)
    }   
    const sub=()=>{
        setState1(state1-1)
    }   
    return(
        <>
        <h1>App Component </h1>
        <h3>1.useEffect() Hook</h3>
        <h2>{state}</h2>
        <h2>{state1}</h2>
        <button onClick={add}>Increment</button><br/><br/>
        <button onClick={sub}>Decrement</button>
        </>
    )
}
// export default App //line 4