import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props){
  return (
    <button
      className="square" 
      onClick={()=> props.onClick()}>
      {props.value}
    </button>
  );
}

class Library extends React.Component {
  constructor(props) {
    super(props);
    let value_range = [];
    for (var i = 0; i <= 31; i++) {   
      value_range.push(i);
    }
    this.state = {
      square_show: Array(64).fill(null),
      square_matched: Array(64).fill(null),
      square_value: value_range,
      first_pick: true,
      first_pick_index: -1,
    };
  }

  handleClick(i) {
    return;
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.square_show[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let status = "title TBD"
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
        </div>
      </div>
    );
  }
}

class LPage extends React.Component {
  render() {
    return (
      <div>
      <div className="navigation-div"> <NavBar /> </div>
      <div className="libraries">
        <div className="library-titles">
          <div>LIB1</div>
        </div>
        <div className="library">
          <Library />
        </div>
        <div className="library-titles">
          <div>LIB2</div>
        </div>
        <div className="library">
          <Library />
        </div>
        <div className="library-titles">
          <div>LIB3</div>
        </div>
        <div className="library">
          <Library />
        </div>
        <div className="library-titles">
          <div>LIB4</div>
        </div>
        <div className="library">
          <Library />
        </div>
      </div>
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


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LPage />);


