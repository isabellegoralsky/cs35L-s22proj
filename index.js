import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function loadImages(){
        // Declare an array object for our array of images
        let images = [];
        var imageFiles = ['bull0.jpg', 'bull1.jpg','bull2.jpg','bull3.jpg','bull4.jpg',
                        'bull5.jpg','bull6.jpg','bull7.jpg','bull8.jpg']  
                        
        for (var i = 0, j = imageFiles.length; i < j; i++) {
        var image = new Image; //This is a placeholder
        image.src = 'bulldog/' + imageFiles[i]; //Set the src attribute
        images.push(image); //Append the new image into the pictures array
        }
         
        //Show the result:
        console.log(images);
        return images;
}

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
      className="4square"
      onClick={()=> props.onClick()}>
      {props.value}
    </button>
  );
}

function Image(props){
  console.log("source: ", props.source)
  return (
    <button>
      <img className="libimages" src={props.source} alt="library" 
      width="200" height="200"
      onClick = {()=>props.onClick()} />
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);  
    let value_range = [];
    for (var i = 1; i <= 8; i++) {
      value_range.push(i);
    }
    let value_range_s1 = shuffle(value_range);
    let value_range_s2 = shuffle(value_range_s1);
    this.state = {   
      img_show: Array(16).fill(0),
      img_matched: Array(16).fill(0),
      //img_value: [1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1],
      img_value: value_range_s1.concat(value_range_s2),
      first_pick: true,
      first_pick_index: -1,
      score: 0,
      playable: 1,
    };
  }

 handleClick(i) {
    const img_show = this.state.img_show.slice();
    const img_matched = this.state.img_matched.slice();
    const img_value = this.state.img_value.slice();
    if (this.state.playable==0 || calculateWinner(img_matched) || img_matched[i]){
      return;
    }
    if (img_show.includes(img_value[i]) && i!=this.state.first_pick_index){
      img_matched[i]=1;
      img_matched[this.state.first_pick_index]=1;
      img_show[i] = img_value[i];
      this.setState({
        img_show: img_show,
        img_matched: img_matched,
        first_pick: true,
        first_pick_index: -1,
        score: this.state.score + 1,
      });
    }else{
      if (this.state.first_pick==true){
        img_show[i] = img_value[i];
        this.setState({
          img_show: img_show,
          first_pick: false,
          first_pick_index: i,
          score: this.state.score + 1,
        });
      }else{
        img_show[i] = img_value[i];
        this.setState({
          playable: 0,
          img_show: img_show,
          score: this.state.score + 1,
        });
        setTimeout(function(){
          img_show[this.state.first_pick_index] = 0;
          img_show[i] = 0; 
          this.setState({
            playable: 1, 
            img_show: img_show,
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
        value={this.state.img_show[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
      
  renderImage(i) {
    var imgname = "bulldog/bull" + this.state.img_show[i] + ".jpg";
    return (
      <Image      
        source={imgname}
	onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.img_matched);
    let status;
    if (winner) {
      status = 'Winner! Score: ' + this.state.score;
    } else{
      status = 'Choose a Card. Score: ' + this.state.score;
    }
      
    var ar = [0,1,2,3];
    return (
      <div>
      <div className="status">{status}</div>
      <div className="rows">
        <div className="img-row">
          <div
className="lib-img">{this.renderImage(0)}</div>
          <div
className="lib-img">{this.renderImage(1)}</div>
          <div
className="lib-img">{this.renderImage(2)}</div>
          <div
className="lib-img">{this.renderImage(3)}</div>
        </div>
<div className="img-row">
          <div
className="lib-img">{this.renderImage(4)}</div>
          <div
className="lib-img">{this.renderImage(5)}</div>
          <div
className="lib-img">{this.renderImage(6)}</div>
          <div
className="lib-img">{this.renderImage(7)}</div>
        </div>
<div className="img-row">
          <div
className="lib-img">{this.renderImage(8)}</div>
          <div
className="lib-img">{this.renderImage(9)}</div>
          <div
className="lib-img">{this.renderImage(10)}</div>
          <div
className="lib-img">{this.renderImage(11)}</div>
        </div>
<div className="img-row">
          <div
className="lib-img">{this.renderImage(12)}</div>
          <div
className="lib-img">{this.renderImage(13)}</div>
          <div
className="lib-img">{this.renderImage(14)}</div>
          <div
className="lib-img">{this.renderImage(15)}</div>
        </div>
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

function calculateWinner(img_matched) {
  let win = 1;
  for (let i = 0; i < img_matched.length; i++) {
    if (img_matched[i]==0){   
      win = img_matched[i];
    }
  }
  return win;
}      
