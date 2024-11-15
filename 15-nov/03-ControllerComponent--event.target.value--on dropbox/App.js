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
        <h3>You Selected <span className='text-danger'>{state}</span> Course</h3>
        <select onChange={handler} className='ms-5'>
            <option>JavaScript</option>
            <option>React</option>
            <option>Angular</option>
            <option>MongoDB</option>
            <option>Express</option>
        </select>            
        </>
    )
}
// export default App //line 4