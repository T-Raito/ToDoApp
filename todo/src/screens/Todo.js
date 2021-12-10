import React, { useState } from "react";
import { IconContext } from "../../node_modules/react-icons";
import { FaTrashAlt } from "../../node_modules/react-icons/fa";
import { FaPlusCircle } from "../../node_modules/react-icons/fa";

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
    // spliceメソッドはindexから１個newTodosから取り除く
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div style={style.total}>
      <form style={style.form}>
        <input
          value={task}
          placeholder="テキストを入力･･･"
          onChange={handleNewTask}
          style={style.input}
        />
        <span onClick={handleSubmit}>
          <IconContext.Provider value={{ color: "#1760a0", size: "1.3em" }}>
            <FaPlusCircle />
          </IconContext.Provider>
        </span>
      </form>
      <p style={style.line}></p>
      <ul style={style.lists}>
        {todos.map((todo, index) => (
          <li key={index} style={style.todos}>
            {todo.task}
            <span onClick={() => handleRemoveTask(index)} style={style.trash}>
              <IconContext.Provider value={{ color: "grey" }}>
                <FaTrashAlt />
              </IconContext.Provider>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const style = {
  total: {
    marginTop: "40px",
    height: "800px",
    width: "600px",
    borderRadius: "10px",
    marginLeft: "10px",
    border: "4px solid gray",
  },
  form: {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  input: {
    width: "400px",
    border: "none",
    outline: "none",
    borderBottom: "2px solid grey",
  },
  line: {
    borderBottom: "2px solid grey",
  },
  lists: {
    // backgroundColor: "tomato",
    width: "560px",
    // marginLeft: "10px",
  },
  todos: {
    textAlign: "center",
    width: "500px",
    listStyle: "none",
    fontSize: "20px",
    border: "1px solid gray",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "2px 2px 4px gray",
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
  },
  trash: {
    textAlign: "center",
    marginTop: "5px",
  },
};
