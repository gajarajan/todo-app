import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { toDo, handleChange, addTodo, iseditTodo } = this.props;
    return (
      <div className="form">
        <form onSubmit={addTodo} >
          <input value={toDo} type="text" onChange={handleChange}></input>
          <br />
          <button
            type="submit"
            className={iseditTodo? "submitedit" : "submitadd"}
          >
            {iseditTodo ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
