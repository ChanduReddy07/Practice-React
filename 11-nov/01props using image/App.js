import React from 'react'
import CompA from './CompA'
import CompB from './CompB'
import pic from "./images/1.jpg"
export default function App(){
    return(
        <>
        <h1>App Component</h1>
        <CompA x={pic}/>
        <CompB y="B components data"/>
        </>
    )
}