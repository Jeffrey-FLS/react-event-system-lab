// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

  focus = () => {
    console.log("Good!")
  };

  render() {
    return(
      <button
        onFocus={() => {console.log("Good!")}}
        onBlur={() => {console.log("Hey! Eyes on me!")}}>
        'Hey! Eyes on me!'
      </button>
    );
  }
}

export default EyesOnMe;
