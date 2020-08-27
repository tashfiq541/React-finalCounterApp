import React, { Component } from "react";
import classes from "./counter.module.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClass()}>
              {this.counterHandler()}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-dark btn-sm"
              onClick={this.props.increse}
            >
              +
            </button>
            <button
              className="btn btn-info btn-sm ml-2"
              onClick={this.props.decrese}
              disabled={this.props.value === 0 ? "disable" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm ml-2"
              onClick={this.props.delete}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
  counterHandler() {
    return this.props.value === 0 ? "zero" : this.props.value;
  }
  getBadgeClass() {
    let getClasses = "badge m-2 ";
    getClasses += this.props.value === 0 ? "badge-warning" : "badge-primary";
    return getClasses;
  }
}

export default Counter;
