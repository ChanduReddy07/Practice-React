import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App(){
    const[user, setUser]=useState(['zoro','nancy','peter','queen'])
    const updateArr=()=>{
        setUser(['one','two','nancy','zoro'])
    }
    const person={
        fname:'MS',
        lname:'dhoni'
    }
    const person1={
        fname:'virat',
        lname:'kholi'
    }
    const[user1, setUSer1]=useState(person)
    const updateObject=()=>{
        setUSer1(person1)
    }
    return(
        <>
        <h1>App Component </h1>
        <h3 className='pl-4'>{user}</h3>
        <h3>fname: {user1.fname}, lname: {user1.lname}</h3>
        <button className='btn btn-primary m-2' onClick={updateArr}>update array</button>
        <button className='btn btn-primary' onClick={updateObject}>update Object</button>
        </>
    )
}