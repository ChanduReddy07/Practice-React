import {useEffect, useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const [state, setState]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')//sometime we get error update from https://randomuser.me/documentation
        .then((res)=>res.json())
        .then((json)=>setState(json.results))
    })
     
    return(
        <>
        <h1>App Component </h1>
        <h3>1.useEffect() Hook </h3>
        {state.map((x,index)=><li key={index}>{index}. {x.name.first}</li>)}
        </>
    )
}
// export default App //line 4