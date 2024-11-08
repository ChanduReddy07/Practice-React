import ReactDOM from 'react-dom/client'
import './style.css'
import pic from './images/1.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
var result
const dat=new Date()
var h=dat.getHours()
if(h<12){
    result="Good Morning"
    var obj={color:'Orange'}
}else if(h>=12 && h<16){
    result="Good Afternoon"
    var obj={color:'Red'}
}else{
    result="Good Evening"
    var obj={color:'Blue'}
}

root.render(
    <>
    <h2>Styling-CSS</h2>
    <h3 style={obj}>{result}</h3>
    </>
)