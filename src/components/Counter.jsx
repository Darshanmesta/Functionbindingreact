import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.clearCounter = this.clearCounter.bind(this);
  }

  incrementCounter(x) {
    this.setState({
      count: this.state.count + x
    });
  }

  decrementCounter(x) {
    this.setState({
      count: this.state.count - x
    });
  }

  clearCounter() {
    this.setState({
      count: 0,
      status:true
    });
  }

  render() {
    return (
      <div>
        <button
          class="btn btn-md btn-success"
          onClick={this.incrementCounter.bind(this, 10)}
        >
          Increment
        </button>
        <button
          class="btn btn-md btn-warning"
          onClick={this.decrementCounter.bind(this, 10)}
        >
          Decrement
        </button>
        <button className="btn btn-md btn-info" onClick={this.clearCounter}>
          Clear Value
        </button>
    
        <h2>Counter={this.state.count}</h2>
      </div>
    );
  }
}


