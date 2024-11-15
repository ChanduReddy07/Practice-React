import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
    const arr= [ "apple", "apricot", "banana", "blackberry", "blueberry", "cherry", "coconut", "cranberry", "date", "dragonfruit", "elderberry", "fig", "gooseberry", "grape", "grapefruit", "guava", "kiwi", "lemon", "lime", "lychee", "mango", "melon", "nectarine", "orange", "papaya", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "tangerine", "watermelon"]
    const [state, setState]=useState('')     
    return(
        <>
        <h1>App Component -Controlled Component</h1>
        <h3>Searching</h3><br/>
        <input className='ms-3' type='text' value={state} onChange={(e)=>setState(e.target.value)}/>
        {arr.filter(name=>name.toLowerCase().includes(state.toLowerCase())).map(name=><li className='ms-3'>{name}</li>)}
        
        </>
    )
}
// export default App //line 4