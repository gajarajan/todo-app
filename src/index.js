import React from "react";
import ReactDOM from "react-dom";
import "./todo.scss";
import Todo from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
