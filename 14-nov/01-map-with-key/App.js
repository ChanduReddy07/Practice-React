import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const[state, setState]=useState(['one','two','three','four'])
    
    return(
        <>
        <h1>App Component </h1><h3>map-index using map() Method</h3>
        {state.map((x,index)=><li key={index}>{x}</li>)}</>
    )
}
// export default App //line 4