import React from 'react';
import Subreddits from '../subreddits/subreddits';

class Home extends React.Component {
  render() {
    return(
      <div className="mainContainer">
        <h1>Subreddits</h1>
        <Subreddits />
      </div>
    );
  }
}

export default Home;
