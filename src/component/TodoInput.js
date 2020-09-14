import React, { Component } from "react";
import PropTypes from "prop-types";
import { Add, Edit } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
export default class TodoInput extends Component {
  render() {
    const { toDo, handleChange, addTodo, iseditTodo, inputerror } = this.props;
    return (
      <div className="form">
        <form onSubmit={addTodo}>
          <TextField
            value={toDo}
            type="text"
            onChange={handleChange}
            className="input"
            error
            id="filled-error-helper-text"
            label="todo"
            defaultValue="Hello World"
            helperText={inputerror}
            variant="filled"
          ></TextField>

          {iseditTodo ? (
            <button type="submit">
              <Edit />
            </button>
          ) : (
            <button type="submit" >
              <Add />
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
