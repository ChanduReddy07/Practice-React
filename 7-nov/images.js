import ReactDOM from 'react-dom/client'
import pic from './images/1.jpg'
import happy from './images/smile.jpg'
import sad from './images/sad.jpg'
var p1="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fhappy-and-sad&psig=AOvVaw1NA7xqi2FDeRK-5BzW3I1d&ust=1731043475169000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCL1M29yYkDFQAAAAAdAAAAABAJ"
const root=ReactDOM.createRoot(document.getElementById('root'))
let name="Student Tribe"
root.render(
    <>
    <h2>Variables</h2>
    {/*from src*/}
    <img src={pic} alt="from src folder"/>
    {/*from public folder*/}
    <img src="2.jpg" width="400px"/>
    <img src={p1}/>
    <br/><br/>

    </>
)