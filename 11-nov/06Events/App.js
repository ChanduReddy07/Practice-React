import React from 'react'

export default function App(){
    function demo(){
        alert("Welcome to function -using events")
    }
    return(
        <>
        <h1>App Component </h1>
        <p>using Events calling function which shows alert message</p>
        <button onClick={demo}>ChickMe</button><br/><br/><br/><br/>
        <button onMouseOver={demo}>onMouseOver</button><br/><br/><br/><br/>
        <button onMouseOut={demo}>MouseOut</button>
        </>
    )
}