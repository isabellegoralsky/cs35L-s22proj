import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props){
  return (
    <button
      className="options" 
      onClick={()=> props.onClick()}>
      {props.value}
    </button>
  );
}

function Image(props){
  return (
    <img className="libimages" src={props.source} alt="library" width="200" height="200"/>
  )
}

  function handleClick(i) {
    return;
  }

  function renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
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
        <div className="status">Browse the 4 library previews below to customize your playing cards on the main page!</div>
        <div className="links">
          <div className="lib">{renderSquare("Puppy Theme")}</div>
          <div className="lib">{renderSquare("Baby Chickens Theme")}</div>
          <div className="lib">{renderSquare("Bulldog Theme")}</div>
          <div className="lib">{renderSquare("Sea Life Theme")}</div>
        </div>
        <div className="rows">
          <div className="img-row">
            <div className="lib-img">{renderImage("bulldog/bull1.jpg")}</div>
            <div className="lib-img">{renderImage("bulldog/bull2.jpg")}</div>
            <div className="lib-img">{renderImage("bulldog/bull3.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("bulldog/bull4.jpg")}</div>
            <div className="lib-img">{renderImage("bulldog/bull5.JPG")}</div>
            <div className="lib-img">{renderImage("bulldog/bull6.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("bulldog/bull7.jpg")}</div>
            <div className="lib-img">{renderImage("bulldog/bull8.jpg")}</div>
            <div className="lib-img">{renderImage("bulldog/bull9.jpg")}</div>
          </div>
        </div>
      </div>
    );
  }

  function renderLib(){
    return (
      <Library />
    );
  }

class LPage extends React.Component {
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
        <ul class="nav-items">
          <li><a class="nav-item" href="google.com">GAME</a></li>
          <li><a class="nav-item" href="google.com">COMMENTS/CONCERNS</a></li>
          <li><a class="nav-item" href="google.com">LIBRARY</a></li>
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
root.render(<LPage />);


