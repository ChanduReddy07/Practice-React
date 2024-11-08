import ReactDOM from 'react-dom/client'
import happy from './images/smile.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
const clr={
    color:'red',
    background:'yellow',
    margin:'20px',
    padding:'20px'
}
root.render(
    <>
    <h2>Styling-CSS</h2>
    <br/>
    <h2 style={clr}>Using in line css in React</h2>
    <br/>
    <img style={{margin:'10px 90px',border:'2px solid black',radius:'5px'}} src={happy}/>
    </>
)
