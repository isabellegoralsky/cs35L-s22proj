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
            <div className="lib-img">{renderImage("bulldog/bull14.jpg")}</div>
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

class Bull extends React.Component {
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

export default Bull;



