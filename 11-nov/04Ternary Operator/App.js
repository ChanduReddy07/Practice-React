import React from 'react'
//let marks=prompt("enter marks")
let marks=60
let result
//ternary operator
result=marks>50?"Failed":"Passed"
export default function App(){
    return(
        <>
        <h1>App Component parent</h1>
        <h2> {result}</h2>
        </>
    )
}
