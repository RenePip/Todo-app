//creating the Boxes
//First thing to do while creating a componet is importing react
import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  //writing js code
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);

    //documenting the data put in the log in the dev tools (console)
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value); //updtaes the state
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
