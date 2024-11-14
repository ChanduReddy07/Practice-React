import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from './images/sad.jpg'
import pic2 from './images/smile.jpg'
function App(){
    const[state, setState]=useState(pic)
    const handler=()=>{
        if(state==pic){
            setState(pic2)
        }else{
            setState(pic)
        }    
    }
    
    return(
        <>
        <h1>App Component </h1>
        <button onClick={handler}>update image</button><br/><br/>
        <img class="rounded mx-auto d-block" src={state}></img>
        </>
    )
}
export default App
