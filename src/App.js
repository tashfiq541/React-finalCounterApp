import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: "c01", value: 4 },
      { id: "c02", value: 0 },
      { id: "c03", value: 0 },
      { id: "c04", value: 0 },
    ],
  };

  incrementHandler = (counterId) => {
    const counterIndex = this.state.counters.findIndex((c) => {
      return c.id === counterId;
    });
    const counter = { ...this.state.counters[counterIndex] };
    counter.value++;
    const counters = [...this.state.counters];
    counters[counterIndex] = counter;
    this.setState({ counters: counters });
  };

  decrementHandler = (counterId) => {
    const counterIndex = this.state.counters.findIndex((c) => {
      return c.id === counterId;
    });
    const counter = { ...this.state.counters[counterIndex] };
    counter.value--;
    const counters = [...this.state.counters];
    counters[counterIndex] = counter;
    this.setState({ counters: counters });
  };

  deleteHandler = (counterIndex) => {
    const counters = [...this.state.counters];
    counters.splice(counterIndex, 1);
    this.setState({ counters: counters });
  };

  resetHandler = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => {
      return (counter.value = 0);
    });
    this.setState({ counters: counters });
  };

  countFormate = (counterValue) => {
    return counterValue === 0 ? "zero" : counterValue;
  };

  render() {
    return (
      <div className="p-5">
        <button onClick={this.resetHandler} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map((counter, index) => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              increse={() => this.incrementHandler(counter.id)}
              decrese={() => this.decrementHandler(counter.id)}
              delete={() => this.deleteHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
