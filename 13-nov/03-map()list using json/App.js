import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import data from './data.json'
export default function App(){
    const[state, setState]=useState(data)
    
    return(
        <>
        <h1>App Component </h1><h3>list using map() Method</h3>
        {state.map((x)=><li class="list-group list-group-item">{x.firstName}</li>)}
        </>
    )
}
// export default App //line 4