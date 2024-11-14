import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const[state, setState]=useState(['one','two','three','four','and','the'])
    
    return(
        <>
        <h1>App Component </h1>
        <h3>1.useState - filter() Method 3 letter characters</h3>
        {state.filter(search=>search.length==3).map((x)=><li>{x}</li>)}
        <h3>2.useState - filter(),include('o')</h3>
        {state.filter(search=>search.includes('o')).map((x)=><li>{x}</li>)}</>
    )
}
// export default App //line 4