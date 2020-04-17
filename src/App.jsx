import React, { Component } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="jumbotron text-center">
                Welcome to the Counter Component
              </h2>
            </div>
          </div>

          <div>
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}
