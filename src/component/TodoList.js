import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const {
      message,
      todoList,
      editTodo,
      removeTodo,
      completedTodolist,
      clearTodolist,
      deleteChecktodo
    } = this.props;
    return (
      <div className="table">
        {(message !== "" || todoList.length === 0) && <p>{message}</p>}
        {todoList.length > 0 && (
          <div>
            <input type="checkbox" onChange={(e)=>{
              let checked=e.target.checked;
              this.setState(todoList.map((todo)=>{
                todo.select=checked;
                return todo
              }))
            }}/>
            {todoList.map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <div className="todocheckbox">
                    <div className="checkbox">
                      <input type="checkbox" checked={todo.select} key={todo.id} onChange={(event)=>{let checked=event.target.checked
                     console.log(event.target.checked);
                     this.setState(
                        todoList.map((checktodo) =>{
                          if(todo.id ===checktodo.id){
                            todo.select=checked
                            
                          }
                          return checktodo
                        }
                      ))}}/>
                    </div>
                    <div className="list">
                      <span >{todo.title}</span>
                    </div>
                  </div>
                  <div className="todobutton">
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
            <div className="clear">
              <button onClick={()=>deleteChecktodo()}>delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
