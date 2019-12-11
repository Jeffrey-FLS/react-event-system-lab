// Code Keypad Component Here

import React, { Component } from  'react';

class Keypad extends Component {

  // state = {
  //   inputValue: ""
  // };


  changeInputValue = (event) => {
    console.log('Entering password...');
  };

  render() {
    return(
      <input type="password" onKeyUp={this.changeInputValue}/>
    );
  }
}

export default Keypad;

// onChange={this.changeInputValue}
// value={this.state.inputValue}

// this.setState({
//   inputValue: event.target.value
// });
