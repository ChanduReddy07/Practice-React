import ReactDOM from 'react-dom/client'
import './style.css'
import course,{place,city, students, people, demo} from './data.js'
const root=ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
    <table>
        <tr><th>Name</th><th>Age</th><th>country</th></tr>
        <tr><td>{people.name}</td><td>{people.age}</td><td>{people.country}</td></tr>
    </table>
    </>
)