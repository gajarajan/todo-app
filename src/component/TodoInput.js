import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { toDo, handleChange, addTodo, iseditItem } = this.props;
    return (
      <div>
        <form onSubmit={addTodo}>
          <input value={toDo} type="text" onChange={handleChange}></input>
          <br />
          <button
            type="submit"
            className={iseditItem ? "submitedit" : "submitadd"}
          >
            {iseditItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
