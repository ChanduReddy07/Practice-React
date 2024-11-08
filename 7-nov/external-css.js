import ReactDOM from 'react-dom/client'
import './style.css'
import pic from './images/1.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <h2>Styling-CSS</h2>
    <br/>
    <h2>Using external style.css in React</h2>
    <br/>
    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. </p>
    <img src={pic}/>
    <img src={pic}/><img src={pic}/><img src={pic}/>
    </>
)