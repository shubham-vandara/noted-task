import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

// lOGICAL COMPONENT

function TodoApp() {
  const [todo, setTodo] = useState("");

  function getTodo() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  const [todos, setTodos] = useState(getTodo);

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (editId) {
      setTodos(
        todos.map((item) => (item.id === editId ? { ...item, todo } : item))
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      // console.log(todos); // Array of todos with the new todo [ {id, todo, isCompleted} ]
    }
    setTodo("");
  };

  const handleEditTodo = (id) => {
    const toEdit = todos.find((item) => item.id === id); // FIND THE ID OF THE TODO TO EDIT
    setEditId(id);
    setTodo(toEdit.todo);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-[100vh] px-4 bg-slate-950">
      <Navbar />
      <div className="bg-violet-100 min-h-[75vh] shadow-lg rounded-lg p-6 w-full max-w-lg m-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Todo App
        </h2>
        <AddTodo
          todo={todo}
          editId={editId}
          onAddTodo={handleAddTodo}
          onChange={handleChange}
        />
        <h3 className="font-semibold text-lg mt-4">Your Todos</h3>
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center mt-4">No todos yet</p>
        ) : (
          <div className="mt-4 space-y-3">
            {todos.map((item) => (
              <Todo
                key={item.id}
                item={item}
                handleToggleComplete={handleToggleComplete}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
