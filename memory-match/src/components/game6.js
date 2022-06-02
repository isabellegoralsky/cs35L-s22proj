import React from 'react';
import ReactDOM from 'react-dom/client';
import './game.css';

//optimized Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}

function Image(props){
  //console.log(props.source)
  var imgindex = props.source.charAt(props.source.length-5);
  //console.log("imgindex: ", imgindex);
  return (
    <button className="board-button">
      <img className="libimages" src={props.source} alt="libraries"
      width="70" height="70"
      onClick = {()=>props.onClick(imgindex)}/>
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    let value_range = [];
    for (var i = 1; i <= 18; i++) {
      value_range.push(i);
    }
    let vr = value_range.concat(value_range);
    let vrs = shuffle(vr);
    let pset;
    this.state = {
      img_show: Array(36).fill(0),
      img_matched: Array(36).fill(0),
      img_value: vrs,
      first_pick: true,
      first_pick_index: -1,
      score: 0,
      playable: 1,
      pset: "bull",
    };
  }
 
  handleChange(event){
    this.setState({
      pset: event.target.value,
    });
  }

  handleClick(i) {
    console.log("clicked i: ", i)
    const img_show = this.state.img_show.slice();
    const img_matched = this.state.img_matched.slice();
    const img_value = this.state.img_value.slice();
    if (i == "reset"){
      console.log("Resetting")
      this.setState({
        img_show: Array(32).fill(0),
        img_matched: Array(32).fill(0),
        first_pick: true,
        first_pick_index: -1,
        score: 0,
        playable: 1,
        pset: this.state.pset,
      });
    }
   else  if (this.state.playable==0 || calculateWinner(img_matched) ||
img_matched[i]){
      return;
    }          
  else if (img_show.includes(img_value[i]) && i!=this.state.first_pick_index){
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

  renderImage(i) {
    var index = this.state.img_show[i]
    //console.log("pset: ", this.state.pset);
    if (this.state.pset == "bull"){
      //console.log("Bulldogs!");
      var imgname = "bulldog/" + this.state.pset + index + ".jpg";
    }
    else if (this.state.pset == "chicks"){
      //console.log("Lil Baby Chicks!");
      var imgname = "chickens/" + this.state.pset + index + ".jpg";
    }
    else if (this.state.pset == "p"){
      //console.log("Pups!");
      var imgname = "puppies/" + this.state.pset + index + ".jpg";
    }
    else if (this.state.pset == "s"){
      //console.log("Under the Sea!");
      var imgname = "sea/" + this.state.pset + index + ".jpg";
    }
    //console.log("Asked for image: ", imgname);
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
    let imgarg;
    if (winner) {
      status = 'Winner! Score: ' + this.state.score;
    } else{
      status = 'Choose a Card. Score: ' + this.state.score;
    }
     
    return (
      <div>
        <label className="dropdown-pics">
          Choose your photoset:
          <select id = "pset" value={this.state.pset} onChange={(e) => 
{this.handleChange(e)}}>
            <option value="bull">Bulldogs</option>
            <option value="p">Puppies</option>
            <option value="chicks">BabyChickens</option>
            <option value="s">SeaLife</option>
          </select>
        </label>
        <button onClick={() => this.handleClick("reset")}>
          Reset Game
        </button>
      <div className="status2">{status}</div>
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
          <div
className="lib-img">{this.renderImage(4)}</div>   
          <div
className="lib-img">{this.renderImage(5)}</div>
        </div>
        <div className="img-row">
          <div
className="lib-img">{this.renderImage(6)}</div>
          <div  
className="lib-img">{this.renderImage(7)}</div>
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
          <div
className="lib-img">{this.renderImage(16)}</div>
          <div
className="lib-img">{this.renderImage(17)}</div>
        </div>
        <div className="img-row">
          <div
className="lib-img">{this.renderImage(18)}</div>
          <div
className="lib-img">{this.renderImage(19)}</div>
          <div
className="lib-img">{this.renderImage(20)}</div>
          <div
className="lib-img">{this.renderImage(21)}</div>
          <div    
className="lib-img">{this.renderImage(22)}</div>
          <div
className="lib-img">{this.renderImage(23)}</div>
        </div>
<div className="img-row">
          <div
className="lib-img">{this.renderImage(24)}</div>
          <div
className="lib-img">{this.renderImage(25)}</div>
          <div
className="lib-img">{this.renderImage(26)}</div>
          <div
className="lib-img">{this.renderImage(27)}</div>
          <div
className="lib-img">{this.renderImage(28)}</div>
          <div
className="lib-img">{this.renderImage(29)}</div>
        </div>
<div className="img-row">
          <div
className="lib-img">{this.renderImage(30)}</div>
          <div
className="lib-img">{this.renderImage(31)}</div>
          <div
className="lib-img">{this.renderImage(32)}</div>
          <div
className="lib-img">{this.renderImage(33)}</div>
          <div
className="lib-img">{this.renderImage(34)}</div>
          <div
className="lib-img">{this.renderImage(35)}</div>
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
