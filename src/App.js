import React, { Component } from "react";
import uuid from "uuid";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      message: "",
      toDo: "",
      iD: uuid(),

      iseditTodo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      toDo: e.target.value,
    });
  }
  addTodo(event) {
    event.preventDefault();
    const { todoList, toDo, iD } = this.state;
    if (toDo.length === 0) {
      this.setState({
        message: "no todo",
      });
    } else {
      const newitem = {
        id: iD,
        title: toDo,
      };
      const updatedItems = [...todoList, newitem];

      this.setState({
        todoList: updatedItems,
        toDo: "",
        message: "",
        iD: uuid(),
        iseditTodo: false,
      });
    }
  }
  editTodo = (id) => {
    const remove = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    const filter = this.state.todoList.find((todo) => {
      return todo.id === id;
    });
    this.setState({
      todoList: remove,
      toDo: filter.title,
      iD: id,
      iseditTodo: true,
    });
  };
  removeTodo = (id) => {
    const remove = this.state.Item.filter((todo) => {
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
    const removeitem = this.state.Item.filter((item1) => {
      return item1.id !== id;
    });
    const add = this.state.Item.filter((item1) => {
      return item1.id === id;
    });
    const newcompleted = {
      id: id,
      title: add.title,
    };
   
    if (removeitem.length === 0) {
      this.setState({
        message: "no item in list",
      });
    }
  };
  clearTodolist = () => {
    this.setState({
      todoList: [],
      message: "no todo",
    });
  };
  render() {
    const { todoList, message,toDo, iseditTodo } = this.state;

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
        />
      </div>
    );
  }
}
