import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";


export default function Home() {
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
    class MainPage extends React.Component {
        render() {
            return (
                <div>
                    <div className="navigation-div"> <NavBar /> </div>
                    <div>
                        <h3>How to Play</h3>
                        <p>The game is played by clicking two tiles on the board consecutively to try to find matching tiles.
                            Once a tile is selected, it will flip to reveal an image, and the player is expected to find the matching image tile on the board.
                            If two tiles with matching images are selected consecutively (i.e. in one turn), they will remain flipped for the remainder of the game.
                            If the tiles selected in a turn are not matching, they will both flip back over. The game ends when all matching sets of tiles are revealed.
                            The difficulty level can be toggled to change the number of cards to match on the board, and the theme may also be changed to replace the tiles with a
                            different image library.</p>
                        <h3>About</h3>
                        <p> Memory Match is a website that takes a classic children's board game and ports it to an online format.
                            This web application was created by Isabelle Goralsky, McKenna Davis, and Samantha Rafter as a project for the Spring
                            2022 session of CS35L at UCLA. </p>
                    </div>
                    <div className="navigation-div"> <Foot /> </div>
                </div>
            );
        }
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<MainPage />);
}

