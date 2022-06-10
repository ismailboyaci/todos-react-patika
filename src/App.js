import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import Todo from "./components/todoList";
import Footer from "./components/footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} todo={todos.todo} />

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            status={status}
            key={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>

      <Footer
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
