import ReactDOM from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById('root'))
let uid="react"
let result
if(uid=="react"){
    // alert("Authorised user")
    result="Authorised user"
}else{
    // alert("Un-Authorised user")
    result="Un-Authorised user"
}
root.render(
    <>
    <h2>Variables</h2>
    <h3>{result}</h3>
    </>
)