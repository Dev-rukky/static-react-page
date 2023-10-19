import React from "react";
import NavBar from './components/NavBar';
import MainContent from "./components/MainContent";
import './styles/index.css';

function App() {
    return (
        <div className="Container">
            <NavBar />
            <MainContent />
        </div>
    )
}

export default App;