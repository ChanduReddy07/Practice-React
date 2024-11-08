import ReactDOM from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById('root'))
const date=new Date()
let h=date.getHours()
let result
if(h<12){
    result="Good Morning"
}else if(h>=12 && h<17){
    result="Good Afternoon"
}else if(h>=17 && h<21){
    result="Good Evening"
}else{
    result="Good Night"
}
root.render(
    <>
    <h2>Date : {Date()}</h2>
    <h3>{result}</h3>
    <h3>{h}</h3>
    </>
)