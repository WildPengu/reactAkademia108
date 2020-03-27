import React from "react";
import Counter from "./components/Counter";

class App extends React.Component {
  defaultNumber = 108;
  state = {
    number: this.defaultNumber
  };
  addNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  lowToZero = () => {
    this.setState({
      number: 0
    });
  };
  resetToDefault = () => {
    this.setState({
      number: this.defaultNumber
    });
  };
  render() {
    return (
      <div>
        <Counter
          number={this.state.number}
          addNumber={this.addNumber}
          resetToDefault={this.resetToDefault}
          lowToZero={this.lowToZero}
        />
      </div>
    );
  }
}

export default App;
