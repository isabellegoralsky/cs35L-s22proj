import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function Square(props){
  return (
    <button
      className="square" 
      onClick={()=> props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    let value_range = [];
    for (var i = 0; i <= 15; i++) {   
      value_range.push(i);
    }
    let value_range_s1 = shuffle(value_range);
    let value_range_s2 = shuffle(value_range_s1);
    this.state = {
      square_show: Array(36).fill(null),
      square_matched: Array(36).fill(null),
      square_value: value_range_s1.concat(value_range_s2),
      first_pick: true,
      first_pick_index: -1,
    };
  }

  handleClick(i) {
    const square_show = this.state.square_show.slice();
    const square_matched = this.state.square_matched.slice();
    const square_value = this.state.square_value.slice();
    if (calculateWinner(square_matched) || square_matched[i]){
      return;
    }
    if (square_show.includes(square_value[i]) && i!=this.state.first_pick_index){
      square_matched[i]=1;
      square_matched[this.state.first_pick_index]=1;
      square_show[i] = square_value[i];  
      this.setState({
        square_show: square_show,
        square_matched: square_matched,
        first_pick: true,
        first_pick_index: -1,
      });
    }else{
      if (this.state.first_pick==true){
        square_show[i] = square_value[i];
        this.setState({
          square_show: square_show,
          first_pick: false,
          first_pick_index: i,
        });
      }else{
        square_show[i] = square_value[i];
        this.setState({
          square_show: square_show,
        });
        setTimeout(function(){
          square_show[this.state.first_pick_index] = null;
          square_show[i] = null; 
          this.setState({
            square_show: square_show,
            first_pick: true,
            first_pick_index: -1,
          });
        }.bind(this), 3000);
      }
    }
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
    const winner = calculateWinner(this.state.square_matched);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else{
      status = 'Choose a Card';
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        <div className="board-row">
        </div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(square_matched) {
  let win = 1;
  for (let i = 0; i < square_matched.length; i++) {
    if (square_matched[i]==null){
      win = square_matched[i];
    }
  }
  return win;
}