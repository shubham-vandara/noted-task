import Button from "./Button";

// PRESENTATIONAL COMPONENT

/* eslint-disable react/prop-types */
export default function Todo({
  item,
  handleToggleComplete,
  handleEditTodo,
  handleDeleteTodo,
}) {
  return (
    <div key={item.id} className="bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex  flex-row justify-between items-center gap-4">
        {/* Left Section: Checkbox & Todo Text */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => handleToggleComplete(item.id)}
            className="w-5 h-5 cursor-pointer mt-1"
          />
          <p
            className={`text-md sm:text-lg break-words whitespace-normal flex-1 ${
              item.isCompleted ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {item.todo}
          </p>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex gap-2 self-start">
          <Button onClick={() => handleEditTodo(item.id)} text="Edit" />
          <Button onClick={() => handleDeleteTodo(item.id)} text="Delete" />
        </div>
      </div>
    </div>
  );
}
