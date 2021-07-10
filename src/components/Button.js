import React from "react";

class Button extends React.Component {
  onClick(event) {
    console.log(event);
  }

  // onInputClick() {
  //     console.log('Input was clicked');
  // }

  render() {
    return (
      <div>
        <button class="ui black button">Analyze</button>
      </div>
    );
  }
}

export default Button;
