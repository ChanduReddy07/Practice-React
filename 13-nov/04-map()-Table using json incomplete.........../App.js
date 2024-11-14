import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import data from './data.json'
export default function App(){
    const[state, setState]=useState(data)
    
    return(
        <>
        <h1>App Component </h1><h3>list using map() Method</h3>
        <table className='table table-dark'>
            <th>
                <td>firstName</td>
                <td>lastNameName</td>
            </th>
            {data.map((x)=>
            <tr>
            <td>{x.firstName}</td>
            <td>{x.lastName}</td>
            </tr>)}
        </table>
        </>
    )
}
// export default App //line 4