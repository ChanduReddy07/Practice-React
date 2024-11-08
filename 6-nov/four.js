import ReactDOM from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById('root'))
var uid="React Application"
let items=['watch','shoes','hat']
let person={
    fname:'akki',
    lname:'babu',
    age:17
}
root.render(
    <>
    <h1>Welcome to React world</h1>
    <h2>React is used for single paged application</h2>
    <h3>Variables</h3>
    <h3>{uid}</h3>
    <h3>{50 + 19}</h3>
    <h3>{items[0] +"   "+ items[1]}</h3>
    <h3>First name is {person.fname}, last name is {person.lname}</h3>
    </>
)