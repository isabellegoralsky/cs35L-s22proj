import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib.css';

import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";

import Bull from "./pages/bull";
import Chick from "./pages/chick";
import Ocean from "./pages/ocean";
import Pup from "./pages/pup";
import Try from "./pages/try";

function Square(props){

  return (
    <button className="options">
        {props.value}
    </button>
  );
}


  function renderSquare(i) {
    return (
      <Square
        value={i}
      />
    );
  }

  function Library() {
    return (
      <div>
        <div className="status">Browse the 4 library previews below to customize your playing cards on the main page!</div>
        <div className="l1nks">
        <Router>
          <div>
          <a href={`/pup`}>
            <div className="lib">{renderSquare("Puppy Theme")}</div>
          </a>
          <a href={`/chick`}>
            <div className="lib">{renderSquare("Baby Chickens Theme")}</div>
          </a>
          <a href={`/bull`}>
            <div className="lib">{renderSquare("Bulldog Theme")}</div>
          </a>
          <a href={`/ocean`}>
            <div className="lib">{renderSquare("Sea Life Theme")}</div>
          </a>
          </div>
          <Routes>
            <Route path="/chick" 
                element={<Chick />} />
            <Route path="/bull" 
                element={<Bull />} />
            <Route path="/pup" 
                element={<Pup />} />
            <Route path="/ocean" 
                element={<Ocean />} />
          </Routes>
        </Router>
        </div>
        <div className="explore">Click the themes to explore :D</div>
      </div>
    );
  }

  function renderLib(){
    return (
      <Library />
    );
  }

class MainPage extends React.Component {
  render() {
    return (
      <div>
      <div className="navigation-div"> <NavBar /> </div>
      <div className="libraries">
        <div>
          <div className="library-titles">GAME CARD LIBRARY</div>
        </div>
        <div className="library">
          {renderLib()}
        </div>
      </div>
      <div className="navigation-div"> <Foot /> </div>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <div><img className="navlogo" src="memmatch35L.svg" alt="library" width="100" height="60"/></div>
        <ul class="nav-items">
          <li><a class="nav-item" href="google.com">GAME</a></li>
          <li><a class="nav-item" href="google.com">COMMENTS/CONCERNS</a></li>
          <Router>
            <a href={`/`}>
              <li class="nav-item">LIBRARY</li>
            </a>
          </Router>
        </ul>
      </nav>
    )
  }
}

class Foot extends React.Component {
  render () {
    return (
      <footer>
        <div className="foot">
          made by md, ig, sr<br/>
          cs35L spr 2022
        </div>
      </footer>
    )
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainPage />);


