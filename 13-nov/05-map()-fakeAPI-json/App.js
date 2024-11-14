import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
    const[state, setState]=useState([])
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json=>setState(json))
    //   .then(json => console.log(json))
    
    return(
        <>
        <h1>App Component </h1><h3>list using map() Method</h3>
        {state.map((x)=><li>{x.id}. {x.title}</li>)}
        </>
    )
}
// export default App //line 4