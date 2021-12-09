import React, { useState } from "react";
// import { Button } from "../components/Button";
import { FaTrashAlt } from "../../node_modules/react-icons/fa";
import { FaPlus } from "../../node_modules/react-icons/fa";

export const Todo = () => {
  // 既存のタスクの代入
  const initialState = [
    {
      task: "買い物へ行く",
    },
    {
      task: "サッカーをする",
    },
    {
      task: "ハンバーグを焼く",
    },
  ];
  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState("");

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };
  // 入力されたタスクをtodosへ追加する
  const handleSubmit = (event) => {
    // ✳︎以下の２行がなくても実行はされる
    // event.preventDefault();
    // if (task === "") return;
    setTodo((todos) => [...todos, { task }]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div>
      <div>
        <form style={style.formStyle}>
          {" "}
          <input
            value={task}
            placeholder="テキストを入力･･･"
            onChange={handleNewTask}
          />
          <span onClick={handleSubmit}>
            <FaPlus />
          </span>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={style.todoStyle}>
              {todo.task}
              {"   "}
              <span onClick={() => handleRemoveTask(index)}>
                <FaTrashAlt />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const style = {
  formStyle: {
    textAlign: "center",
  },
  todoStyle: {
    textAlign: "center",
    listStyle: "none",
    fontSize: "20px",
  },
};
