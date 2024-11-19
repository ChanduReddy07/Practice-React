import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {

    return (
        <>
        <BrowserRouter>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/about">Contact</Link><br/> 
        <Routes>
            <Route path='/' element={<h1>Hello Page</h1>}/>
            <Route path='/about' element={<h1>This is Abount Page</h1>}/>
            <Route path='/contact' element={<h1>This is Contach Page</h1>}/>
        </Routes>
        </BrowserRouter>
        </>
            
    );
}

export default App;

//<a> reloads the page to navigate btw pages
//<Link> dont reload the page to navigate btw pages 
