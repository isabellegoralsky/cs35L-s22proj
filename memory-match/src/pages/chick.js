import React from 'react';
import '../index.css';

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

  function renderLib(){
    return (
      <Library />
    );
  }

class Chick extends React.Component {
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
  
export default Chick;