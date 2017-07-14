import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
          <button className="btn buyer">
            Buyers
          </button>
          <button className="btn manufacturer">
            Manufacturers
          </button>
      </div>
    );
  }
};

export default Home;
