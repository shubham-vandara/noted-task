/* eslint-disable react/prop-types */

// PRESENTATIONAL COMPONENT

function AddTodo({ editId, todo, onAddTodo, onChange: handleChange }) {
  return (
    <>
      <h2 className="font-semibold my-4 text-lg">
        {editId ? "Edit Todo" : "Add Todo"}
      </h2>
      <div className="flex justify-between  items-center gap-2">
        <input
          onChange={handleChange}
          value={todo}
          type="text"
          placeholder="Add a new todo..."
          className="w-full max-w-md bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm"
        />
        <button
          onClick={onAddTodo}
          disabled={todo === ""}
          className={`px-6 py-2 rounded ml-2 font-medium transition duration-300 ease-in-out transform 
    ${
      todo === ""
        ? "bg-gray-300 cursor-not-allowed"
        : editId
        ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        : "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
    }`}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
    </>
  );
}

export default AddTodo;
