import ReactDOM from 'react-dom/client'
import './style.css'
import course,{place,city, students, people, demo} from './data.js'
const root=ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
    <h2>Course is {course}</h2>
    <h3>Place is {place}</h3>
    <h3>City is {city}</h3>
    <h3>using Array: Students are {students[3]}</h3>
    <h3>using Object: {people.name}, {people.age}, {people.country} </h3>
    <h3>using Function:{demo()}</h3>
    </>
)