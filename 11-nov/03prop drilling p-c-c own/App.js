import React from 'react'
import CompA from './CompA'
let x="React course"
let y="props drilling"
export default function App(){
    return(
        <>
        <h1>App Component parent</h1>
        <CompA data={x} data1={y}/>
        </>
    )
}