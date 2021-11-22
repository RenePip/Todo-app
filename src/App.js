import React, { useState, useEffect } from "react";
import "./App.css";
//Importing componets
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State makeup
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app starts (more console then display)
// useEffect (() => {
//  getLocalTodos();
// }, []);
  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //creating functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // //Save to local
  // const saveLocalTodos =()=>{
  //   if (localStorage.getItem('todos') ===  null ){
  //     localStorage.setItem('todos', JSON.stringify([])); // adding to the local storage 
  //   }
  //   else{
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // };
  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos') ===  null ){
  //     localStorage.setItem('todos', JSON.stringify([]));//checking the local storage 
  //   }
  //   else{
  //     let todoLocal = localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }
  return (
    <div className="App">
      <header>
        <h1>Rene's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList
      filteredTodos = {filteredTodos}
       setTodos={setTodos} 
       todos={todos} />
    </div>
  );
}

export default App;
