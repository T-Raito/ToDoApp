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
    <div style={styles.total}>
      <form style={styles.form}>
        <input
          value={task}
          placeholder="テキストを入力･･･"
          onChange={handleNewTask}
          style={styles.input}
        />
        <span onClick={handleSubmit}>
          <IconContext.Provider value={{ color: "#1760a0", size: "1.2em" }}>
            <FaPlusCircle />
          </IconContext.Provider>
        </span>
      </form>
      <p style={styles.line}></p>
      <ul style={styles.lists}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todos}>
            {todo.task}
            <span onClick={() => handleRemoveTask(index)} style={styles.trash}>
              <IconContext.Provider value={{ color: "#1760a0", size: "1.2em" }}>
                <FaTrashAlt />
              </IconContext.Provider>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  total: {
    marginTop: "40px",
    marginLeft: "150px",
    height: "800px",
    width: "550px",
    borderRadius: "10px",
    border: "4px solid grey",
    backgroundColor: "white",
  },
  form: {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
    // backgroundColor: "tomato",
    fontSize: "20px",
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
    width: "520px",
    paddingLeft: "60px",
    // backgroundColor: "tomato",
  },
  todos: {
    paddingLeft: "30px",
    textAlign: "left",
    width: "400px",
    height: "50px",
    lineHeight: "50px",
    listStyle: "none",
    fontSize: "20px",
    border: "1px solid gray",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "2px 2px 4px gray",
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    // backgroundColor: "tomato",
  },
  trash: {
    textAlign: "center",
    marginTop: "5px",
  },
};
