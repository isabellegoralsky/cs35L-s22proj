import React from 'react';
// import ReactDOM from 'react-dom/client';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import RecordList from "./components/recordList";
import Home from './components/home';
import EasyGame from './components/game4';
import MedGame from './components/game6';
import HardGame from './components/game8';
import Library from './components/library';
import Bull from "./components/bull";
import Chick from "./components/chick";
import Ocean from "./components/ocean";
import Pup from "./components/pup";
import './index.css'


const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/comments" element={<RecordList />} />
                <Route exact path="/game" element={<EasyGame />} />
                <Route exact path="/gamemedium" element={<MedGame />} />
                <Route exact path="/gamehard" element={<HardGame />} />
                <Route exact path="/library" element={<Library />} />
                <Route exact path="/pup" element={<Pup />} />
                <Route exact path="/ocean" element={<Ocean />} />
                <Route exact path="/chick" element={<Chick />} />
                <Route exact path="/bull" element={<Bull />} />

            </Routes>
        </div>
    );
};

export default App;

//<Navbar />