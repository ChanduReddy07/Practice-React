import React from 'react'
import { useState } from 'react'

export default function App(){

    const[data, setData]=useState("Student Tribe")
    const handler=()=>{
        setData("Madhapur")
    }
    return(
        <>
        <h1>App Component </h1>
        <h3>{data}</h3>
        </>
    )
}