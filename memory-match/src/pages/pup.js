import React from 'react';
import '../lib.css';

function Image(props){
  return (
    <img className="libimages" src={props.source} alt="library" width="200" height="200"/>
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
            <div className="lib-img">{renderImage("puppies/p1.jpg")}</div>
            <div className="lib-img">{renderImage("puppies/p2.jpg")}</div>
            <div className="lib-img">{renderImage("puppies/p7.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("puppies/p4.jpg")}</div>
            <div className="lib-img">{renderImage("puppies/p5.JPG")}</div>
            <div className="lib-img">{renderImage("puppies/p6.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("puppies/p9.jpg")}</div>
            <div className="lib-img">{renderImage("puppies/p8.jpg")}</div>
            <div className="lib-img">{renderImage("puppies/p3.jpg")}</div>
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

class Pup extends React.Component {
  render() {
    return (
      <div>
      <div className="libraries-bull">
        <div className="library">
          {renderLib()}
        </div>
      </div>
      </div>
    );
  }
}
  
export default Pup;