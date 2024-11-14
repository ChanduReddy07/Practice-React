import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import data from './data.json'
export default function App(){
    const[state, setState]=useState(data)
    //   .then(json => console.log(json))
    
    return(
        <>
        <h1>App Component </h1><h3>list using map() Method</h3>
        <div className='container'>
            <div className='row'>
            {state.map((x)=><div className='col-md-4'>
                <div class="card m-2">
            <img className="card-img-top" src={x.thumbnailUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className='card-title'>{x.title}</h5>
  </div>
</div>
                </div>)}
            </div>
        </div>
        </>
    )
}
// export default App //line 4