import React, { Component } from "react";
import PropTypes from "prop-types";
import { Add, Edit } from "@material-ui/icons";

export default class TodoInput extends Component {
  render() {
    const { toDo, handleChange, addTodo, iseditTodo } = this.props;
    return (
      <div className="form">
        <form onSubmit={addTodo}>
          <input value={toDo} type="text" onChange={handleChange}></input>
          
          {iseditTodo ? (
            <button type="submit" className="submitedit">
              <Edit/>
            </button>
          ) : (
            <button type="submit" className="submitadd">
              
              <Add/>
            </button>
          )}
        </form>
      </div>
    );
  }
}
TodoInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  iseditTodo: PropTypes.bool,
  addTodo: PropTypes.func.isRequired,
};
