import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
//root.render(<Library />);
root.render(<NavBar />);


