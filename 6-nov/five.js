import ReactDOM from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById('root'))
const date=new Date()
let h=date.getHours()
let m=date.getMinutes()
let s=date.getSeconds()
root.render(
    <>
    <h2>Variables</h2>
    <h3>{Date()}</h3>
    <h3>{h}:{m}:{s}</h3>
    </>
)