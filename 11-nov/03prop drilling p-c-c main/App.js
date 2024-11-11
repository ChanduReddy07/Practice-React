import React from 'react'
import CompA from './CompA'
let x="React course"
export default function App(){
    return(
        <>
        <h1>App Component</h1>
        <CompA data={x}/>
        </>
    )
}