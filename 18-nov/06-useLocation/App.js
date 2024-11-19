import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom'
function App() {
    const location=useLocation()
    console.log(location.pathname)

    return (
        <>
        <h1>using useLocation</h1>
        <h1>{location.pathname}</h1>
        </>
            
    );
}

export default App;
