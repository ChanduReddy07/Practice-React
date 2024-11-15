import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
    const [state, setState]=useState('Student Tribe')
    const handler=(e)=>{
        setState(e.target.value)
    }
     
    return(
        <>
        <h1>App Component -Controlled Component</h1>
        <h3>event.target.value</h3><br/>
        <h3>{state}</h3>
        <input type="text" value={state} onChange={handler}/>

            
        </>
    )
}
// export default App //line 4

