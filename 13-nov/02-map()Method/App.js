import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(){
    const[state, setState]=useState(['akki','peter','nancy'])
    
    return(
        <>
        <h1>App Component </h1>
        {state.map((x)=><li>{x}</li>)}
        </>
    )
}
export default App