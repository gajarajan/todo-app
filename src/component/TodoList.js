import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const {
      message,
      TodoList,
      editTodo,
      removeTodo,
      completedTodolist,
      clearTodolist,
    } = this.props;
    return (
      <div className="table">
        {(message !== "" || TodoList.length === 0) && <p>{message}</p>}
        {TodoList.length > 0 && (
          <div>
            {TodoList.map((todo) => {
              return (
                <div className="item">
                  <span key={todo.id}>{todo.title}</span>
                  <div className="itembutton">
                    <button onClick={() => removeTodo(todo.id)}>delete</button>
                    <button onClick={() => editTodo(todo.id)}>edit</button>

                    <button onClick={() => completedTodolist(todo.id)}>
                      completed
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="clear">
              <button onClick={() => clearTodolist()}>clear list</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
