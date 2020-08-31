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
      id: uuid(),
      iscompleted: false,
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
      };
      const updatedTodo = [...todoList, newTodo];

      this.setState({
        todoList: updatedTodo,
        toDo: "",
        message: "",
        id: uuid(),
        iseditTodo: false,
        iscompleted: false,
      });
    }
  }
  // checkTodo = () => {
    
  // };
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
      id: id,
      iseditTodo: true,
      iscompleted: false,
    });
  };
  removeTodo = (id) => {
    const remove = this.state.todoList.filter((todo) => {
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
    const remove = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    const completed = this.state.todoList.filter((item1) => {
      return item1.id === id;
    });

    if (remove.length === 0) {
      this.setState({
        message: "no todo in list",
      });
    }
    console.log(completed);
  };
  clearTodolist = () => {
    this.setState({
      todoList: [],
      message: "no todo",
    });
  };
  deleteChecktodo=()=>{
    const checktodo=this.state.todoList.filter((todo) => {
      return todo.select !== true;
    });
    this.setState({
      todoList:checktodo
    })
  }
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
