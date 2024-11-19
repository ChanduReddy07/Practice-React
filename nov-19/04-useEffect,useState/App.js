import { useEffect, useState } from 'react';

export default function App() {
    const [state, setState]=useState('react')
    const[num, setNum]=useState(0)
  const handler=(e)=>{
    setState(e.target.value)
  }

  useEffect(()=>{
    setNum(num+1)   //re-renders infinity
  })

  return (
    <>
    <h1>React useEffect --  useState</h1>
      <input type='text' value={state} onChange={handler}/>
      {num}
    </>
  );
}
