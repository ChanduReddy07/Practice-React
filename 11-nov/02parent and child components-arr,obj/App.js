import React from 'react'
import CompA from './CompA'
const arr=['one','two','three','four']
const person={
    name:"zoro",
    age:19,
    place:"Florida"
}
export default function App(){
    return(
        <>
        <h1>App Component</h1>
        <CompA array={arr} person_obj={person}/>
        {/* <CompB y="B components data"/> */}
        </>
    )
}