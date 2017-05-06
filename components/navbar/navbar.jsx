import React from 'react';

class Navbar extends React.Component {

  render() {

    return(
      <div className="navbarContainer">
        <div className="left">
          <ul>Reddit</ul>
        </div>
        <div className="right">
          <ul>Sign Up</ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
