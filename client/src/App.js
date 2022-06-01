import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Home from './components/home';
import EasyGame from './components/easygame';
//import Library from './components/libraries';
import './index.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/comments" element={<RecordList />} />
                <Route exact path="/game1" element={<EasyGame />} />
            </Routes>
            <footer>
                <div className="foot">
                    made by md, ig, sr<br />
                    cs35L spr 2022
                </div>
            </footer>
        </div>
    );
};

export default App;