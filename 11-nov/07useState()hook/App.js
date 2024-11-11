import React from 'react'
import { useState } from 'react'

export default function App(){
    const[state, setState]=useState("State")
    return(
        <>
        <h1>App Component </h1>
        <h3>{state}</h3>
        </>
    )
}