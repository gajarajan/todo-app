import React, { Component } from "react";
import PropTypes from "prop-types";
import {Delete,Edit,Clear,Done} from '@material-ui/icons';
export default class TodoList extends Component {
  render() {
    const {
      message,
      todoList,
      editTodo,
      removeTodo,
      completedTodolist,
      clearTodolist,
      deleteChecktodo,
    } = this.props;
    return (
      <div className="table">
        {(message !== "" || todoList.length === 0) && <p>{message}</p>}
        {todoList.length > 0 && (
          <div>
            <div className="clear">
              <button onClick={() => clearTodolist()}>clear list</button>
            </div>
            <div className="clear">
              <button onClick={() => deleteChecktodo()}><Delete/></button>
            </div>
            <input
              type="checkbox"
              onChange={(e) => {
                let checked = e.target.checked;
                this.setState(
                  todoList.map((todo) => {
                    todo.select = checked;
                    return todo;
                  })
                );
              }}
            />
            {todoList.map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <div className="todocheckbox">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        checked={todo.select}
                        key={todo.id}
                        onChange={(event) => {
                          let checked = event.target.checked;

                          this.setState(
                            todoList.map((checktodo) => {
                              if (todo.id === checktodo.id) {
                                todo.select = checked;
                              }
                              return checktodo;
                            })
                          );
                        }}
                      />
                    </div>
                    <div className="list">
                      <span>{todo.title}</span>
                    </div>
                  </div>
                  <div className="todobutton">
                    <span onClick={() => removeTodo(todo.id)}>  <Clear/></span>
                    <span onClick={() => editTodo(todo.id)}><Edit/></span>

                    <button onClick={() => completedTodolist(todo.id)}>
                      <Done/>
                    </button>
                  </div>
                </div>
              );
            })}
            
          </div>
        )}
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteChecktodo: PropTypes.func.isRequired,
  completedTodolist: PropTypes.func.isRequired,
  clearTodolist: PropTypes.func.isRequired,
};
