import ReactDOM from 'react-dom/client'
import happy from './images/smile.jpg'
import sad from './images/sad.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
let result
let uid=prompt("user id")
if(uid=="st"){
    result=happy
}else{
    result=sad
}
root.render(
    <>
    <h2>images-happy or sad</h2>
    <br/>
    <img src={result}/>
    <br/>

    </>
)