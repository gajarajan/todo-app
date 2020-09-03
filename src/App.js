import React, { Component } from "react";
import uuid from "uuid";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      message: "",
      toDo: "",
      id: uuid(),
      iseditTodo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      toDo: e.target.value,
    });
  }
  // Add the todo in list
  addTodo(event) {
    event.preventDefault();
    const { todoList, toDo, id } = this.state;
    if (toDo.length === 0) {
      this.setState({
        message: "no todo",
      });
    } else {
      const newTodo = {
        id: id,
        title: toDo,
        select: false,
        completed: false,
      };
      const updatedTodo = [...todoList, newTodo];

      this.setState({
        todoList: updatedTodo,
        toDo: "",
        message: "",
        id: uuid(),
        iseditTodo: false,
      });
    }
  }

  editTodo = (id) => {
    let remove = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    let filter = this.state.todoList.find((todo) => {
      return todo.id === id;
    });
   let removetodo= remove.map((todo)=>{
     todo.select=false
     return todo
   })
    this.setState({
      todoList: removetodo,
      toDo: filter.title,
      id: id,
      iseditTodo: true,
    });
  };
  
  removeTodo = (id) => {
    let remove = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todoList: remove,
    });

    if (remove.length === 0) {
      this.setState({
        message: "no todo ",
      });
    }
  };
  completedTodolist = (id) => {
    this.setState(
      this.state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    console.log(id);
  };
  clearTodolist = () => {
    this.setState({
      todoList: [],
      message: "no todo",
    });
  };
  deleteChecktodo = () => {
    const checktodo = this.state.todoList.filter((todo) => {
      return todo.select !== true;
    });
    this.setState({
      todoList: checktodo,
    });
  };
  render() {
    const { todoList, message, toDo, iseditTodo } = this.state;

    return (
      <div className="layout">
        <header>
          <h2>todo App</h2>
        </header>
        <div>
          <TodoInput
            toDo={toDo}
            handleChange={this.handleChange}
            iseditTodo={iseditTodo}
            addTodo={(event) => {
              this.addTodo(event);
            }}
          />
        </div>
        <TodoList
          message={message}
          todoList={todoList}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
          completedTodolist={this.completedTodolist}
          clearTodolist={this.clearTodolist}
          // checkTodo={this.checkTodo}
          deleteChecktodo={this.deleteChecktodo}
        />
      </div>
    );
  }
}
