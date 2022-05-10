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
    for (var i = 0; i <= 7; i++) {
      value_range.push(i);
    }
    let value_range_s1 = shuffle(value_range);
    let value_range_s2 = shuffle(value_range_s1);
    this.state = {
      square_show: Array(16).fill(null),
      square_matched: Array(16).fill(null),
      //square_value: [0,1,2,3,4,5,6,7,7,6,5,4,3,2,1,0],
      square_value: value_range_s1.concat(value_range_s2),
      first_pick: true,
      first_pick_index: -1,
      score: 0,
    };
  }

  handleClick(i) {
    const score = this.state.score;
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
        score: this.state.score + 1,
      });
    }else{
      if (this.state.first_pick==true){
        square_show[i] = square_value[i];
        this.setState({
          square_show: square_show,
          first_pick: false,
          first_pick_index: i,
          score: this.state.score + 1,
        });
      }else{
        square_show[i] = square_value[i];
        this.setState({
          square_show: square_show,
          score: this.state.score + 1,
        });
        setTimeout(function(){
          square_show[this.state.first_pick_index] = null;
          square_show[i] = null; 
          this.setState({
            square_show: square_show,
            first_pick: true,
            first_pick_index: -1,
          });
        }.bind(this), 1500);
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
      status = 'Winner! Score:' + this.state.score;
    } else{
      status = 'Choose a Card. Score: ' + this.state.score;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
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
