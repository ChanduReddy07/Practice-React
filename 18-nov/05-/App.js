import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AboutP from './pages/about'
import ContactP from './pages/contact'
function App() {

    return (
        <>
        <BrowserRouter>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">Contact</Link><br/> 
        <Routes>
            <Route path='/' element={<h1>Hello Page</h1>}/>
            <Route path='/about' element={<AboutP/>}/>
            <Route path='/contact' element={<ContactP/>}/>
        </Routes>
        </BrowserRouter>
        </>
            
    );
}

export default App;

//<a> reloads the page to navigate btw pages
//<Link> dont reload the page to navigate btw pages 