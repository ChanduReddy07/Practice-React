import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App(){

    const[data, setData]=useState(0)
    const add=()=>{
        setData(data+1)
    }
    const del=()=>{
        setData(data-1)
    }
    return(
        <>
        <h1>App Component </h1>
        <h3>{data}</h3>
        <button onClick={add} className='btn btn-success m-2'>increment</button>
        <button onClick={del} className='btn btn-danger'>decrement</button>
        </>
    )
}




import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App(){

    const[data, setData]=useState(0)
    const add=()=>{
        setData(data+1)
    }
    function del(){
        setData(data-1)
    }
    return(
        <>
        <h1>App Component </h1>
        <h3 className='pl-4'>{data}</h3>
        <button onClick={add} className='btn btn-success m-2'>increment</button>
        <button onClick={del} className='btn btn-danger'>decrement</button>
        </>
    )
}
