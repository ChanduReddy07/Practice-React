import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App(){
    const person={
        fname:'MS',
        lname:'dhoni'
    }
    
    const[user1, setUser1]=useState(person)
    const updateObject=()=>{
        setUser1({...user1,lname:'07'})//spread operator
        //setUser1({fname:'bontal',lname:'kumar'})
    }
    return(
        <>
        <h1>App Component </h1>
        <h3>My first name is <span className='text-uppercase'>{user1.fname}</span> <br></br>My last name is <span className='text-uppercase'>{user1.lname}</span></h3>
        <button className='btn btn-primary' onClick={updateObject}>update Object</button>
        </>
    )
}
