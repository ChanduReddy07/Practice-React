import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

export default function App(){
    return(
        <>
        <h1>App Component</h1>
        <CompA x="A component data"/>
        <CompB y="B components data"/>
        </>
    )
}