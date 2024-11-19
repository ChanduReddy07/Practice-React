import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

    return (
        <>
        <BrowserRouter>
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
