import React from 'react'

export default function Child(props){
    return(
        <div>
            <h1>Child COmponent</h1>
            <h2>Hello : {props.x}</h2>
        </div>
    )
}