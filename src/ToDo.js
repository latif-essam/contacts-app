import React, { Component } from "react";
import InputForm from "./Form";
import List from "./List";

class ToDo extends Component {
  state = {
    value: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    this.setState((oldState) => ({
      items: [...oldState.items, this.state.value],
      value: "",
    }));
  };

  deleteLastItem = (event) => {
    this.setState((prevState) => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <InputForm
          addItem={this.addItem}
          inputValue={this.state.value}
          handleChange={this.handleChange}
          inputIsEmpty={this.inputIsEmpty}
          noItemsFound={this.noItemsFound}
          deleteLastItem={this.deleteLastItem}
        />
        <p className="items">Items</p>
        <List items={items} />
      </div>
    );
  }
}

export default ToDo;
