import { useEffect } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

function App() {

    useEffect(() => {
        document.title = "Blog"
    }, []);

    return (
        <div className="App">
            <Sidebar />
            <Main />
        </div>
    )
}

export default App
