import React, { useState } from "react";
import NavBar from './components/NavBar';
import MainContent from "./components/MainContent";
import './styles/index.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="Container">
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent darkMode={darkMode} />
        </div>
    )
}

export default App;