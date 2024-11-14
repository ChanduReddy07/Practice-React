import {useEffect, useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const [state, setState]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')//sometime we get error update from https://fakestoreapi.com/docs
        .then((res)=>res.json())
        .then((json)=>setState(json))
    })
     
    return(
        <>
        <h1>App Component </h1>
        <h3>1.useEffect() Hook fake API</h3>
        <div className='container'>
            <div className='row'>
            {state.map((list)=>
                <div className='col-md-4'>
                    <div className="card mb-4">
                        <img className="card-img-top" src={list.image} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{list.price}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{list.title}</h6>
                        <p className="card-text">{list.title}</p>
                    </div>
                    </div>
                </div>)}
            </div>
        </div>
        </>
    )
}
// export default App //line 4