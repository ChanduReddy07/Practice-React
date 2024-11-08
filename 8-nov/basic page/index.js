import ReactDOM from 'react-dom/client'
import './style.css'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
const root=ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
    <div className="container">
    <Top/>
    <Middle/>
    <Bottom/>
    </div>
    </>
)