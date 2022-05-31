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
            <div className="lib-img">{renderImage("sea/s1.jpg")}</div>
            <div className="lib-img">{renderImage("sea/s2.jpg")}</div>
            <div className="lib-img">{renderImage("sea/s3.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("sea/s4.jpg")}</div>
            <div className="lib-img">{renderImage("sea/s7.JPG")}</div>
            <div className="lib-img">{renderImage("sea/s6.jpg")}</div>
          </div>
          <div className="img-row">
            <div className="lib-img">{renderImage("sea/s9.jpg")}</div>
            <div className="lib-img">{renderImage("sea/s8.jpg")}</div>
            <div className="lib-img">{renderImage("sea/s5.jpg")}</div>
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

class Ocean extends React.Component {
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
  
export default Ocean;