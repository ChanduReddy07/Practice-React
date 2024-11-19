import { useRef, useState } from 'react';

export default function App() {
    const ref=useRef(0)
    console.log(ref.current)
    const [state, setState]=useState('react')
  const handler=(e)=>{
    setState(e.target.value)
    ref.current=ref.current+1
  }

  return (
    <>
    <h1>React useRef --  useState</h1>
      <input type='text' value={state} onChange={handler}/>
      {ref.current}<br/>
      {state}
    </>
  );
}
