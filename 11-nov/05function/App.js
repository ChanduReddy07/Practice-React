import React from 'react'

export default function App(){
    function demo(str){
        alert("Welcome to function "+str)
    }
    return(
        <>
        <h1>App Component parent</h1>
        <h2 > {demo("in React")}</h2>
        </>
    )
}