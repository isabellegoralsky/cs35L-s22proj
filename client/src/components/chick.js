import React from 'react';

import ReactDOM from 'react-dom/client';
import {
    NavLink, BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";

export default function Chick() {
    function Square(props) {

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

    function Image(props) {
        return (
            <img className="libimages" src={props.source} alt="library" width="200" height="200" />
        )
    }


    function renderImage(i) {
        return (
            <Image
                source={i}
            />
        );
    }

    function Library() {
        return (
            <div>
                <div className="rows">
                    <div className="img-row">
                        <div className="lib-img">{renderImage("chickens/chicks1.jpg")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks2.jpg")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks3.jpg")}</div>
                    </div>
                    <div className="img-row">
                        <div className="lib-img">{renderImage("chickens/chicks4.jpg")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks10.JPG")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks6.jpg")}</div>
                    </div>
                    <div className="img-row">
                        <div className="lib-img">{renderImage("chickens/chicks7.jpg")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks8.jpg")}</div>
                        <div className="lib-img">{renderImage("chickens/chicks9.jpg")}</div>
                    </div>
                </div>
            </div>
        );
    }

    function renderLib() {
        return (
            <Library />
        );
    }

    class NavBar extends React.Component {
        render() {
            return (
                <nav>
                    <div><img className="navlogo" src="memmatch35L.svg" alt="library" width="100" height="60" /></div>
                    <ul class="nav-items">
                        <Router><a href={`/`}><li class="nav-item">HOME</li></a></Router>
                        <Router><a href={`/game`}><li class="nav-item">GAME</li></a></Router>
                        <Router><a href={`/comments`}> <li class="nav-item">COMMENTS/CONCERNS</li></a></Router>
                        <Router><a href={`/library`}> <li class="nav-item">LIBRARY</li></a></Router>
                    </ul>
                </nav>
            )
        }
    }

    class Foot extends React.Component {
        render() {
            return (
                <footer>
                    <div className="foot">
                        made by md, ig, sr<br />
                        cs35L spr 2022
                    </div>
                </footer>
            )
        }
    }

    class Chick extends React.Component {
        render() {
            return (
                <div>
                    <div className="navigation-div"> <NavBar /> </div>
                    <div>
                        <div className="library-titles">GAME CARD LIBRARY</div>
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
                            </Router>
                        </div>
                        <div className="explore">Click the themes to explore :D</div>
                    </div>
                    <div className="libraries-bull">
                        <div className="library">
                            {renderLib()}
                        </div>
                    </div>
                    <div className="navigation-div"> <Foot /> </div>
                </div>
            );
        }
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Chick />);
}